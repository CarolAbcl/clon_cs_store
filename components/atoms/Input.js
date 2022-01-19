function Input({ text = 'props not found', type = 'text' }) {
  // El input recibe 2 props:
  // text = el texto que tendrá el label.
  // type = el tipo de input a utilizar (text por defecto)
  const textWoSpaces = text.replace(/\s+/g, '')
  return (
    <>
      <div>
        <input type={type} id={textWoSpaces} placeholder={text} />
        {/* ReplaceAll para eliminar los espacios de la propiedad text con el fin que queden
        como identificadores del input y se puedan enlazar con el label */}
        <label htmlFor={textWoSpaces} title={text}>
          {text}
        </label>
      </div>
      <style jsx>
        {`
          div {
            position: relative;
            width: 100%;
            padding: 24px 0 0;
            margin-top: 12px;
          }

          input {
            width: 100%;
            height: 40px;
            padding: 0.5rem;
            border-radius: 0.5rem;
            border: 1px solid var(--gray);
            outline: none;
            font-size: 1rem;
          }

          input::placeholder {
            color: transparent;
          }

          label {
            position: absolute;
            top: 0;
            left: 0;
            transition: all 0.3s;
            font-size: 1rem;
            width: calc(100% - (0.5rem * 2));
            height: 2rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          input:placeholder-shown ~ label {
            font-size: 1.2rem;
            left: 12px;
            top: 28px;
            cursor: text;
          }

          input:focus ~ label {
            font-size: 1rem;
            left: 0;
            top: 0px;
          }

          input:focus:placeholder-shown {
            border: 1px solid var(--primary);
          }

          input:focus:placeholder-shown ~ label {
            color: var(--primary);
          }
        `}
      </style>
    </>
  )
}

export default Input
