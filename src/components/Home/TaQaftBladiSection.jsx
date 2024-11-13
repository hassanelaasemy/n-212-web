import { COLORS } from "../../../constant/theme";

export default function TaQaftBladiSection() {
  return (
    <>
      <div
        style={{
          paddingBottom: 5,
          paddingTop: 5,
          position: "relative",
          backgroundColor: COLORS.primaryred,
          width: "100%",
          borderRadius: 5,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: COLORS.white }}>TaQafat Biladi</span>
          <img
            style={{ width: 30, height: 30, marginLeft: 5 }}
            src={"../../../public/maroc.webp"}
            alt="Star Maroc"
          />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "500px",
        }}
      >
        <img
          src="../../../public/maroc.webp"
          alt="taqaft-bladi"
          style={{
            width: "100%",
            height: "500px",
            objectFit: "contain",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        />
      </div>
    </>
  );
}
