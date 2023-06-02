interface InputProps{
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void;
}

const Input: React.FC<InputProps>=({
    placeholder, value, type, disabled, onChange
})=>{
    return(
        <input value={value} type={type} placeholder={placeholder} disabled={disabled} className="w-full p-4 text-lg bg-black border-2 border-neutral-800 rounded-md outline-none text-white focus:border-sky-500 focus:border-2 transition disabled:bg-neutral-200 disabled:cursor-not-allowed" onChange={onChange}/>
    )
}

export default Input