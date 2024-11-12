/**
 * 
 * @param letters Cadena de texto a convertir a elementos HTML
 * @param className Clase CSS a aplicar a cada letra
 * @returns  Array de elementos HTML
 */
export const lettersToHtml = (
  letters: string,
  className: string
): JSX.Element[] =>
  letters.split("").map((char, index) => {
    if (char === " ") {
      return (
        <span key={index} className={className+""} style={{ width: "0.2em" }}>
          {char}
        </span>
      );
    }

    return (
      <span key={index} className={className+""}>
        {char}
      </span>
    );
  });
