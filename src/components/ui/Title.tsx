import "../ui/css/Title.css"

interface Title {
    title: any;
}

const Title = ({ title }: Title) => {
    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Title