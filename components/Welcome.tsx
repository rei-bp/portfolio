export default function Welcome(): any {
    return (
        <div className='welcome'>
            <p className='intro'>Welcome, my name is</p>
            <p className='nameBox'><span className='name'>Reinard Pagdilao</span></p>
            <p className='brand'>and I'm a software engineer who builds enjoyable web applications while providing clean, concise, scalable and readable code. </p>
            <style jsx>{`
                .welcome {
                    text-align: center;
                    width: 80%;
                    margin: 0 auto;
                }

                .nameBox {
                    margin: 1rem 0;
                }

                .name {
                    font-size: 3rem;
                    font-weight: bold;
                }

                .pronoun {
                    font-size: 1.25rem;
                }
                
                .brand {
                    margin: 0 auto;
                    width: 80%;
                }
            `}</style>
        </div>
    )
}