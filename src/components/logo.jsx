export const Logo = ({ className, uniColor, place }) => {
  return (
    <div title="CockpitCheck">
      <img
        alt="CockpitCheck App Logo"
        src="128.png"
        style={{
          width: "auto",
          height: place === "header" ? 48 : 32,
          borderRadius: 6,
        }}
      />
    </div>
  );
};
