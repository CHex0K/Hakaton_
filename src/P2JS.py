from src.generate_text import generate_text
from src.utils import meke_prompt
import eel

cat_words="Автотовары, Автоэлектроника и навигация"
item="Видеорегистратор Xiaomi 70mai D06 RU"

@eel.expose
def generate_textJS():
    return(generate_text(meke_prompt(cat_words,item)))

