import { useParams } from 'react-router-dom';

const Description = () => { 
    const params = useParams();

    console.log(params.id);

    return(
        <section>
            
        </section>
    )
}

export default Description;