const Test = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <p>Apakah Anda sering menderita sakit kepala?</p>
        <div className="flex gap-4">
          <label className="w-16 border-2">
            <input type="radio" name="questions" id="" value="yes" className="peer hidden" />
            Ya
          </label>
          <label>
            <input type="radio" name="questions" id="" value="no" />
            Tidak
          </label>
        </div>
      </div>
    </>
  );
};

export default Test;

// Apakah Anda sering menderita sakit kepala?
// Apakah Anda kehilangan nafsu makan?
// Apakah tidur Anda tidak lelap?
// Apakah Anda mudah menjadi takut?
// Apakah Anda merasa cemas, tegang dan khawatir?
// Apakah tangan Anda gemetar?
// Apakah Anda mengalami gangguan pencernaan?
// Apakah Anda merasa sulit berpikir jernih?
// Apakah Anda merasa tidak bahagia?
