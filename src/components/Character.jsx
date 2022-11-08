function Character({character}) {
  return (
    <div className="text-center p-5">
      <h2 className="py-3">{character.name}</h2>
      <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
      <p className="py-3">{character?.origin?.name}</p>
    </div>
  );
}

export default Character;
