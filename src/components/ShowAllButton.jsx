export default function ShowAllButton() {
  return (
    <button
      className="font-poppins font-normal text-ps text-fitness-color-light text-right m-4 invisible-button"
      onClick={() => alert("Alle anzeigen")}
    >
      Alle anzeigen
    </button>
  );
}
