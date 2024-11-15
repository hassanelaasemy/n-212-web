import { COLORS } from "../../../constant/theme";

export default function TaQaftBladiSection() {
  return (
    <>
      <section className="bg-white dark:bg-gray-800 mt-10">
        <div
          style={{
            paddingBottom: 5,
            paddingTop: 5,
            position: "relative",
            backgroundColor: COLORS.primaryred,
            width: "100%",
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
            <span
              className="text-2xl font-bold"
              style={{ color: COLORS.white }}
            >
              TaQafat Biladi
            </span>
            <img
              style={{ width: 30, height: 30, marginLeft: 5 }}
              src="/starmaroc.webp"
              alt="Star Maroc"
            />
          </div>
        </div>
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                TaQafat Bladi
              </h1>
              <div className="mt-8 space-y-5">
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="mx-2">Découvrez la diversité du Maroc</span>
                </p>
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <span className="mx-2">
                    Laissez TaQafat Bladi vous emmener dans un voyage à travers
                    le Maroc. Explorez la carte pour en savoir plus sur le
                    patrimoine, la musique, la cuisine et l&apos;art uniques de
                    chaque ville marocaine. Célébrez la diversité et la beauté
                    de la culture marocaine !
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full mt-8 bg-transparent rounded-md lg:max-w-sm">
              <button
                style={{ background: COLORS.primarygreen }}
                type="button"
                className="h-10 px-20 py-2 m-1 text-white transition-colors duration-200 transform rounded-md hover:bg-green-700 hover:scale-105"
              >
                Voir Map
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
              src="/maroc.webp"
              alt="glasses photo"
            />
          </div>
        </div>
      </section>
    </>
  );
}
