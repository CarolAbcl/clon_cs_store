function QtyAddCart({ fontSize, value }) {
	// QtyAddBasket recibe:
	// fontSize: tamaño fuente ; value: cantidad;
	return (
		<>
			<input type="tel" id="quantity" defaultValue={value}></input>

			<style jsx>
				{`
					input {
						text-decoration: none;
						border: none;
						text-align: center;
						outline: none;
						width: 10%;
						font-size: ${fontSize};
					}
				`}
			</style>
		</>
	);
}

export default QtyAddCart;
