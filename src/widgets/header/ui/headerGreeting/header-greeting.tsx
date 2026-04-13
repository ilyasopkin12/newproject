
type  HeaderGreetingProps = {

    name: string
}

export const HeaderGreeting = ( user : HeaderGreetingProps ) => {
    return (
        <div>
            <h1 className="text-2xl font-bold">{`Добро пожаловать, ${user.name}`}</h1>
            <p className="text-slate-500">Найдите подходящего специалиста и запишитесь на прием.</p>
        </div>
    )
}