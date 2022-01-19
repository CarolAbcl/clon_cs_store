function Check({text="Sin texto"}) {
  return (
    <>
      <div>
        <label className="check_container">
          {text}
          <input type="checkbox" id="check" />
          <label htmlFor="check">
            <div className="check">
              <div className="check_inside"></div>
            </div>
          </label>
        </label>
      </div>
      <style jsx>{`
        .check_container{
          width: 100%;
          padding: .5rem 0;
        }

        input {
          display: none;
        }
        .check {
          width: 16px;
          height: 16px;
          border: 2px solid var(--primary);
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .check_inside {
          background-color: var(--primary);
          width: 8px;
          height: 8px;
          border-radius: 2px;
          transition: all .2s cubic-bezier(.5,-1,.5,1);
          transform-origin: center;
        }

        :not(:checked) ~ label .check_inside {
          width: 0px;
          height: 0px;
        }

        label:first-child{
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: space-between;
        }
      `}</style>
    </>
  )
}

export default Check
