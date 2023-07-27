import random
import time

# Definir el banco de preguntas con sus opciones y respuestas
preguntas = [
    {
        "pregunta": "¿Cuál es la capital de Francia?",
        "opciones": {"a": "París", "b": "Londres", "c": "Berlín"},
        "respuesta": "a"
    },
    {
        "pregunta": "¿Cuál es el río más largo del mundo?",
        "opciones": {"a": "Nilo", "b": "Amazonas", "c": "Yangtsé"},
        "respuesta": "b"
    },
        {
        "pregunta": "¿Cual es el simbolo del Oro?",
        "opciones": {"a": "Au", "b": "Ag", "c": "Fe"},
        "respuesta": "a"
    },
        {
        "pregunta": "¿Cuál es el color del caballo blanco de simon Bolivar?",
        "opciones": {"a": "Blanco", "b": "Amazonas", "c": "Negro"},
        "respuesta": "a"
    },
        {
        "pregunta": "¿Cuantro Tigres Comian en un Trigal 3?",
        "opciones": {"a": "Uno", "b": "Dos", "c": "Tres"},
        "respuesta": "c"
    },
        {
        "pregunta": "¿Cuál es el nombre de la obra mas Famosa de Jk Rowling?",
        "opciones": {"a": "Harry Potter", "b": " Las Cronicas de Narnia", "c": "El señor de los Anillos"},
        "respuesta": "a"
    },
]

def mostrar_pregunta(pregunta):
    print(pregunta["pregunta"])
    for opcion, texto in pregunta["opciones"].items():
        print(f"{opcion}: {texto}")

def jugar_ronda():
    random.shuffle(preguntas)
    preguntas_ronda = preguntas[:5]
    aciertos = 0
    intentos = 5
    tiempo_inicial = time.time()

    for pregunta in preguntas_ronda:
        mostrar_pregunta(pregunta)
        respuesta = input("Tu respuesta (a/b/c): ").lower()

        while respuesta not in ["a", "b", "c"]:
            respuesta = input("Opción inválida. Intenta nuevamente (a/b/c): ").lower()

        if respuesta == pregunta["respuesta"]:
            print("¡Respuesta correcta!\n")
            aciertos += 1
        else:
            intentos -= 1
            print(f"Respuesta incorrecta. Te quedan {intentos} intentos.\n")

        if intentos == 0:
            break

    tiempo_final = time.time()
    tiempo_total = tiempo_final - tiempo_inicial

    print("\n--- RESULTADOS DE LA RONDA ---")
    print(f"Respuestas correctas: {aciertos}")
    print(f"Tiempo total de la ronda: {tiempo_total:.2f} segundos\n")

    if aciertos >= 4:
        print("¡Felicidades, Ganaste!")
    else:
        print("Gracias por participar.")

    print("\n--- RESPUESTAS CORRECTAS ---")
    for pregunta in preguntas_ronda:
        print(f"{pregunta['respuesta']}: {pregunta['opciones'][pregunta['respuesta']]}")

if __name__ == "__main__":
    jugar_ronda()