import './TitleSection.scss'; 

const TitleSection = ({ title, backgroundImage }) => {
  const titleStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="title-section" style={titleStyle}>
      <h1>{title}</h1>
    </div>
  );
};

export default TitleSection;