# -*- coding: utf-8 -*-

import tkinter as tk
from tkinter import filedialog, messagebox
import pygame
import json
import os
import time


class MusicMapper:
    def __init__(self, root):
        self.root = root
        self.root.title("Music Mapper")
        self.root.geometry("700x700")
        self.root.resizable(False, False)

        # =========================
        # PYGAME
        # =========================
        pygame.mixer.init()

        # =========================
        # VARIÁVEIS
        # =========================
        self.music_file = None
        self.is_playing = False
        self.start_time = 0
        self.paused_time = 0

        # Lista das teclas registradas
        self.events = []

        # =========================
        # INTERFACE
        # =========================

        # Título
        title = tk.Label(
            root,
            text="MUSIC MAPPER",
            font=("Arial", 24, "bold")
        )
        title.pack(pady=15)

        # Arquivo atual
        self.file_label = tk.Label(
            root,
            text="Nenhuma música carregada",
            font=("Arial", 11)
        )
        self.file_label.pack(pady=5)

        # Botões de música
        music_frame = tk.Frame(root)
        music_frame.pack(pady=10)

        self.load_button = tk.Button(
            music_frame,
            text="🎵 Carregar Música",
            font=("Arial", 12),
            command=self.load_music
        )
        self.load_button.grid(row=0, column=0, padx=5)

        self.play_button = tk.Button(
            music_frame,
            text="▶ PLAY",
            font=("Arial", 12, "bold"),
            width=10,
            command=self.play_music
        )
        self.play_button.grid(row=0, column=1, padx=5)

        self.stop_button = tk.Button(
            music_frame,
            text="■ STOP",
            font=("Arial", 12, "bold"),
            width=10,
            command=self.stop_music
        )
        self.stop_button.grid(row=0, column=2, padx=5)

        # =========================
        # TEMPO
        # =========================

        self.time_label = tk.Label(
            root,
            text="00:00.000",
            font=("Consolas", 28, "bold")
        )
        self.time_label.pack(pady=10)

        # =========================
        # INSTRUÇÃO
        # =========================

        instruction = tk.Label(
            root,
            text="Durante a música, pressione ↑ ↓ ← → para registrar as notas.",
            font=("Arial", 11)
        )
        instruction.pack(pady=5)

        # =========================
        # LISTA DE EVENTOS
        # =========================

        list_frame = tk.Frame(root)
        list_frame.pack(pady=10)

        scrollbar = tk.Scrollbar(list_frame)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

        self.event_list = tk.Listbox(
            list_frame,
            width=55,
            height=10,
            font=("Consolas", 11),
            yscrollcommand=scrollbar.set
        )
        self.event_list.pack(side=tk.LEFT)

        scrollbar.config(command=self.event_list.yview)

        # =========================
        # BOTÕES DE ARQUIVO
        # =========================

        bottom_frame = tk.Frame(root)
        bottom_frame.pack(pady=10)

        self.clear_button = tk.Button(
            bottom_frame,
            text="🗑 Limpar",
            font=("Arial", 11),
            command=self.clear_events
        )
        self.clear_button.grid(row=0, column=0, padx=5)

        self.save_button = tk.Button(
            bottom_frame,
            text="💾 Salvar JSON",
            font=("Arial", 11, "bold"),
            command=self.save_json
        )
        self.save_button.grid(row=0, column=1, padx=5)

        # =========================
        # TECLADO
        # =========================

        self.root.bind("<KeyPress>", self.key_pressed)

        # Atualiza o relógio
        self.update_timer()

        # Garante que o programa feche corretamente
        self.root.protocol("WM_DELETE_WINDOW", self.close)

    # ============================================================
    # CARREGAR MÚSICA
    # ============================================================

    def load_music(self):

        file_path = filedialog.askopenfilename(
            title="Escolha uma música",
            filetypes=[
                ("Arquivos de áudio", "*.mp3 *.wav *.ogg"),
                ("MP3", "*.mp3"),
                ("WAV", "*.wav"),
                ("OGG", "*.ogg"),
                ("Todos os arquivos", "*.*")
            ]
        )

        if not file_path:
            return

        try:
            pygame.mixer.music.load(file_path)

            self.music_file = file_path

            filename = os.path.basename(file_path)

            self.file_label.config(
                text=f"Música: {filename}"
            )

            # Reseta tudo
            self.stop_music()
            self.clear_events()

        except Exception as e:

            messagebox.showerror(
                "Erro",
                f"Não foi possível carregar a música:\n\n{e}"
            )

    # ============================================================
    # PLAY
    # ============================================================

    def play_music(self):

        if self.music_file is None:

            messagebox.showwarning(
                "Aviso",
                "Primeiro carregue uma música."
            )

            return

        # Se estava parado, começa do início
        pygame.mixer.music.play()

        self.start_time = time.perf_counter()
        self.paused_time = 0

        self.is_playing = True

        # Foca na janela para capturar as teclas
        self.root.focus_force()

    # ============================================================
    # STOP
    # ============================================================

    def stop_music(self):

        pygame.mixer.music.stop()

        self.is_playing = False

        self.time_label.config(
            text="00:00.000"
        )

    # ============================================================
    # TECLAS
    # ============================================================

    def key_pressed(self, event):

        if not self.is_playing:
            return

        key_map = {
            "Up": "up",
            "Down": "down",
            "Left": "left",
            "Right": "right"
        }

        if event.keysym not in key_map:
            return

        key = key_map[event.keysym]

        # Tempo desde que a música começou
        current_time = time.perf_counter() - self.start_time

        # Arredonda para milissegundos
        current_time = round(current_time, 3)

        # Salva evento
        event_data = {
            "tecla": key,
            "tempo": current_time
        }

        self.events.append(event_data)

        # Mostra na lista
        self.event_list.insert(
            tk.END,
            f"{current_time:8.3f}s    →    {key.upper()}"
        )

        # Scroll automático
        self.event_list.see(tk.END)

    # ============================================================
    # ATUALIZAR RELÓGIO
    # ============================================================

    def update_timer(self):

        if self.is_playing:

            current_time = time.perf_counter() - self.start_time

            minutes = int(current_time // 60)
            seconds = int(current_time % 60)
            milliseconds = int((current_time % 1) * 1000)

            self.time_label.config(
                text=f"{minutes:02d}:{seconds:02d}.{milliseconds:03d}"
            )

            # Verifica se a música terminou
            if not pygame.mixer.music.get_busy():

                self.is_playing = False

        self.root.after(10, self.update_timer)

    # ============================================================
    # LIMPAR
    # ============================================================

    def clear_events(self):

        self.events = []

        self.event_list.delete(
            0,
            tk.END
        )

    # ============================================================
    # SALVAR JSON
    # ============================================================

    def save_json(self):

        if not self.events:

            messagebox.showwarning(
                "Aviso",
                "Nenhuma tecla foi registrada."
            )

            return

        file_path = filedialog.asksaveasfilename(
            title="Salvar mapa",
            defaultextension=".json",
            filetypes=[
                ("JSON", "*.json")
            ]
        )

        if not file_path:
            return

        data = {
            "musica": os.path.basename(self.music_file),
            "eventos": self.events
        }

        try:

            with open(
                file_path,
                "w",
                encoding="utf-8"
            ) as file:

                json.dump(
                    data,
                    file,
                    indent=4,
                    ensure_ascii=False
                )

            messagebox.showinfo(
                "Sucesso",
                "Mapa salvo com sucesso!"
            )

        except Exception as e:

            messagebox.showerror(
                "Erro",
                f"Não foi possível salvar:\n\n{e}"
            )

    # ============================================================
    # FECHAR
    # ============================================================

    def close(self):

        pygame.mixer.music.stop()
        pygame.mixer.quit()

        self.root.destroy()


# ================================================================
# INICIAR PROGRAMA
# ================================================================

if __name__ == "__main__":

    root = tk.Tk()

    app = MusicMapper(root)

    root.mainloop()