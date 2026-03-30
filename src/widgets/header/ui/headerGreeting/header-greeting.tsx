interface HeaderGreetingProps {
    name: string;
    surname: string;
}
export const HeaderGreeting = ( props: HeaderGreetingProps ) => {
    return (
        <div>
            <h1 className="text-2xl font-bold">{`Добро пожаловать, ${props.name} ${props.surname}`}</h1>
            <p className="text-slate-500">Найдите подходящего специалиста и запишитесь на прием.</p>
        </div>
    )
}