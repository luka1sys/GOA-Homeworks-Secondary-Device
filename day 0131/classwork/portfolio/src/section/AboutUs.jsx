const AboutMe = () => {
  const image = "https://lh3.googleusercontent.com/a/ACg8ocLVMEIsFlhQhzmFCLW1wZ_OWuDqYXznuiXbZiXl05Fde2M4RDJ5CA=s432-c-no";

  return (
    <div id="About">
      <h1>About Me</h1>
      <p>
        My name is Luka Dgebuadze. I am 16 years old. I am interested in programming
        and I am studying at the Programming Academy. My hobby is playing football.
      </p>
      <img src={image} width="500px" alt="Luka Dgebuadze" />
    </div>
  );
};

export default AboutMe;