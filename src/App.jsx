import Card from './components/Card';
import Input from './components/Input';

function App() {
  const style = {
    main: `bg-neutralLightGrey w-full h-screen flex justify-center items-center`,
    section: `w-[980px] h-[535px]`,
    cardBody: `w-full h-full bg-neutralWhite p-20 rounded-3xl border border-neutralLightGrey`,
    inputBodyStyle: `flex gap-9 w-full h-24 border-b-2 border-neutralLightGrey`,
    inputContentStyle: `w-full h-full`,
    inputTitleStyle: `font-bold text-md text-neutralSmokeyGrey uppercase`,
    inputStyle: `border-neutralLightGrey text-neutralOffBlack font-bold text-2xl px-3 w-1/2 h-10 mt-3 border-2 rounded hover:border-primary transition`,
  };

  return (
    <div className={style.main}>
      <div className={style.section}>
        <Card
          styleCardBody={style.cardBody}
          title={<Input title1="Day" title2="Month" title3="Year" inputBodyStyle={style.inputBodyStyle} inputContentStyle={style.inputContentStyle} inputTitleStyle={style.inputTitleStyle} inputStyle={style.inputStyle} />}
        >
          tes
        </Card>
      </div>
    </div>
  );
}

export default App;
