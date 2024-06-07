import { Card, CustomButton } from "../components";
import { useUserDataLoader } from "../hooks";

export const CardsPage = () => {
  // TODO: ADD API URLS TO THE .ENV FILE FOR BETTER CONFIGURATION
  const baseUrl = "https://jsonplaceholder.typicode.com/users";
  const { apiData, loading, handlePrevious, handleNext } = useUserDataLoader(
    baseUrl,
    1
  );

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <Card data={apiData} />
          <div className="buttons-container w-full flex flex-row items-center justify-center gap-20 pt-10">
            <CustomButton
              onClickCustom={handlePrevious}
              buttonText="Anterior"
            />
            <CustomButton onClickCustom={handleNext} buttonText="Siguiente" />
          </div>
        </div>
      )}
    </div>
  );
};
