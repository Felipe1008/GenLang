import customtkinter as ctk
from tkinter import messagebox

# Configuração inicial do CustomTkinter
ctk.set_appearance_mode("System") 
ctk.set_default_color_theme("blue")

class GenLangApp(ctk.CTk):
    def __init__(self):
        super().__init__()

        # Janela Principal
        self.title("GenLang")
        self.geometry("800x500")
        self.resizable(False, False)

        # Lista de baralhos (inicialmente vazia)
        self.decks = []

        # Título da página
        self.title_label = ctk.CTkLabel(self, text="GenLang", font=("Comic Sans MS", 20, "bold"))
        self.title_label.pack(pady=20)
        self.title_cards = ctk.CTkLabel(self, text="Meus Baralhos", font=("Comic Sans MS", 16, "bold"))
        self.title_cards.pack(pady=10)

        # Botão para criar novo baralho
        self.create_deck_button = ctk.CTkButton(self, text="Criar Novo Baralho", command=self.create_deck)
        self.create_deck_button.pack(pady=2)

        # Frame para listar os baralhos
        self.deck_frame = ctk.CTkFrame(self)
        self.deck_frame.pack(fill="both", expand=True, padx=20, pady=10)

        self.update_deck_list()

    def update_deck_list(self):
        """Atualiza a lista de baralhos na interface."""
        for widget in self.deck_frame.winfo_children():
            widget.destroy()  # Remove widgets antigos

        for deck in self.decks:
            deck_row = ctk.CTkFrame(self.deck_frame)
            deck_row.pack(fill="x", pady=5, padx=5)

            # Nome do baralho
            deck_label = ctk.CTkLabel(deck_row, text=f"{deck['name']} ({deck['cards']} cartões)", font=("Arial", 14))
            deck_label.pack(side="left", padx=10)

            # Botão Editar
            edit_button = ctk.CTkButton(deck_row, text="Editar", width=80, command=lambda d=deck: self.edit_deck(d))
            edit_button.pack(side="right", padx=5)

            # Botão Excluir
            delete_button = ctk.CTkButton(deck_row, text="Excluir", width=80, fg_color="red", command=lambda d=deck: self.delete_deck(d))
            delete_button.pack(side="right", padx=5)

    def create_deck(self):
            """Cria um novo baralho."""
            new_deck_name = ctk.CTkInputDialog(title="Criar Baralho", text="Digite o nome do novo baralho:").get_input()
            if new_deck_name:
                self.decks.append({"name": new_deck_name, "cards": 0})
                self.update_deck_list()
    
    def edit_deck(self, deck):
        """Edita um baralho existente."""
        new_name = ctk.CTkInputDialog(title="Editar Baralho", text=f"Editar nome de '{deck['name']}':").get_input()
        if new_name:
            deck["name"] = new_name
            self.update_deck_list()

    def delete_deck(self, deck):
        """Exclui um baralho."""
        confirm = messagebox.askyesno("Excluir Baralho", f"Tem certeza que deseja excluir o baralho '{deck['name']}'?")
        if confirm:
            self.decks.remove(deck)
            self.update_deck_list()
        
if __name__ == "__main__":
    app = GenLangApp()
    app.mainloop()