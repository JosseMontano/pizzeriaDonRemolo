import { useState,useContext } from 'react'
import { AppContext } from '../../ConfirmarCarrito/provider';
const Contador = () => {
	const [contador, setContador] = useState(1);
	const handleIncrease = (e) => {
		e.preventDefault();
		setContador(contador + 1);}
	const handleDecrease = (e) => {
		e.preventDefault();
		if(contador >= 2) setContador(contador - 1)
	};
	const {setContar}=useContext(AppContext);
		setContar(contador)

	return (
		<>
			<div className='contador flex justify-end w-full h-full sm:justify-start'>
				<div className='grid grid-cols-3 justify-items-center items-center w-full max-w-[114px] h-full max-h-[40px] border border-primary_transparent rounded-[50px]'>
					<button className='text-[20px] font-bold bg-transparent' disabled={contador === 1 ? true : false} onClick={handleDecrease}>-</button>
					<span className='text-text_clr'>{ contador }</span>
					<button className='text-orange text-[20px] font-bold bg-transparent' onClick={handleIncrease}>+</button>
				</div>
			</div>
		</>
	);
};

export default Contador