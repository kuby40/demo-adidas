
interface PageDescriptionProps {
    title: string,
    description: string
}
const PageDescriptionModal: React.FC<PageDescriptionProps> = ({ 
    title,
    description
}) => {
    return (
      <div>
        <h1 className="flex justify-center text-4xl font-extrabold py-4">{title}</h1>
            <p className="flex justify-center px-96">{description}</p>
      </div>
    );
}

export default PageDescriptionModal;