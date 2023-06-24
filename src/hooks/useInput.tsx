import {useState , useCallback} from 'react';

export default function useInput(initialForm : any) {
    const [form,setForm] = useState(initialForm);

    const onChange = useCallback((e : any) => {
        const {name , value} = e.target;
        setForm((form : any) => ({...form , [name] : value}));
    }, []);

    const reset = useCallback(() => setForm(initialForm) , [initialForm])
    return [form, onChange, reset];
}

