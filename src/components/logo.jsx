import ChecklistLogo from "@/assets/images/squarelogo-mid.png";
export const Logo = ({ className, uniColor, place }) => {
  return (
    <div title="CockpitCheck">
      <img
        alt="CockpitCheck App Logo"
        src={ChecklistLogo}
        style={{
          width: "auto",
          height: place === "header" ? 48 : 32,
          borderRadius: 6,
        }}
      />
    </div>
  );
};
