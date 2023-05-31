import { useRef, useState } from 'react'
import './css/form_style.css'
const Form = () => {
    const [selectedOption, setSelectedOption] = useState('');
    // const formRef = useRef(null)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     const name = formRef.current.name.value
    //     const nazwisko = formRef.current.nazwisko.value
    //     const email = formRef.current.email.value
    //     const tel = formRef.current.nr_tel.value
    //     const ulica = formRef.current.ulica.value
    //     const dom = formRef.current.nr_domu.value
    //     const kod = formRef.current.kod.value
    //     const miasto = formRef.current.miasto.value
    //     const rok = formRef.current.rok.value
    //     const uczelnia = formRef.current.uczelnia.value
    //     const kierunek = formRef.current.kierunek.value
    //     const rok_studow = formRef.current.rok_studow.value
    //     const temat = formRef.current.temat.value
    //     const poziom = formRef.current.poziom.value
    //     const termin = formRef.current.termin.value
    //     const nocleg = formRef.current.nocleg.value



    //     fetch("http://localhost:5555/posts", {
    //         method: "POST",
    //         body: JSON.stringify({ name, nazwisko, email, tel, ulica, dom, kod, miasto, rok, uczelnia, kierunek, rok_studow, temat, poziom, termin, nocleg }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }

    //     }).then((res) => { return res.json() }).then(
    //         (res) => {
    //             console.log(res)
    //         }
    //     )

    //     // window.location.reload();
    // }

    const handleRangeChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (

        <div>

            <form id="form" /*onSubmit={onSubmit} ref={formRef}*/ acceptCharset="UTF-8">
                <h1><strong>Formularz rejestracyjny na szkołę letnią</strong></h1>

                <input type="text" className="wejscie" id="name" pattern="[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{0,20}" placeholder="Imię" aria-label="Wpisz swoje imię" data-validation-required-message="Podaj swoje imię" required />

                <input type="text" class="wejscie" id="nazwisko" pattern="[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{0,20}" placeholder="Nazwisko" required={true} data-validation-required-message="Podaj swoje nazwisko" /><br />

                <input type="email" class="wejscie" id="email" placeholder="E-mail" required={true} data-validation-required-message="Podaj swój email" />


                <input type="tel" class="wejscie" id="nr_tel" pattern="[0-9]{0,9}" placeholder="Numer telefonu" required={true} data-validation-required-message="Podaj numer telefonu" /><br />

                <input type="text" class="wejscie" id="ulica" pattern="[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{0,100}" placeholder="Ulica" required={true} data-validation-required-message="Ulica" />

                <input type="text" class="wejscie" id="nr_domu" placeholder="Numer domu/mieszkania" required={true} data-validation-required-message="Podaj numer domu/mieszkania" /><br />

                <input type="text" class="wejscie" id="miasto" pattern="[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]{0,100}" placeholder="Miejscowość" required={true} data-validation-required-message="Podaj swoja Miejscowość" />

                <input type="text" class="wejscie" id="kod" pattern="[0-9]{2}-[0-9]{3}" placeholder="Kod pocztowy" required={true} data-validation-required-message="Kod pocztowy" /><br />

                <input type="text" class="wejscie" id="rok" pattern="[0-9]{4}" placeholder="Rok urodzenia" required={true} data-validation-required-message="Podaj rok urodzenia" onfocus="(this.type='date')" /><br />

                <input type="text" class="wejscie" id="uczelnia" pattern="[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]{0,100}" placeholder="Nazwa uczelni" required={true} data-validation-required-message="Podaj nazwę uczelni" /><br />

                <div id='pole_rok'>
                    <label>Wybierz rok studiów:<span className="selected-option">{selectedOption}</span> </label>

                    <input type="range" id="rok_studow" class="wejscie" name="rok_studow" required={true} min="1" max="3" step="1" onChange={handleRangeChange} data-validation-required-message="Podaj rok studiow" /><br />
                    

                </div>

                <div id='pole_temat'>
                    <label>Temat warsztatów: </label><br />
                    <input
                        type="radio"
                        name="temat"
                        value="Kurs Programowania"
                        required={true}
                        data-validation-required-message="Podaj temat"
                    />
                    <label>


                        <a id="tekst_temat1">Kurs Programowania</a>

                        <div id="obrazek_temat1"></div>
                    </label>

                    <input
                        type="radio"
                        name="temat"
                        value="Obsługa baz danych"
                        required={true}
                        data-validation-required-message="Podaj temat"
                    />
                    <label>

                        <a id="tekst_temat2">Obsługa baz danych</a>

                        <div id="obrazek_temat2"></div>
                    </label>

                    <input
                        type="radio"
                        name="temat"
                        value="Grafika komputerowa"
                        required={true}
                        data-validation-required-message="Podaj temat"
                    />
                    <label>

                        <a id="tekst_temat3">Grafika komputerowa</a>

                        <div id="obrazek_temat3"></div>
                    </label>

                    <input
                        type="radio"
                        name="temat"
                        value="Sieci komputerowe"
                        required={true}
                        data-validation-required-message="Podaj temat"
                    />
                    <label>

                        <a id="tekst_temat4">Sieci komputerowe</a>

                        <div id="obrazek_temat4"></div>
                    </label>
                </div>

                <select name="poziom" class="wejscie" id="poziom" required={true} data-validation-required-message="Podaj swoj poziom" >
                    <option value="" disabled selected hidden>Poziom języka angielskiego</option>
                    <option>B1</option>
                    <option>B2</option>
                    <option>C1</option>
                </select>




                <div id='pole_termin'>
                    <label>Termin szkoły letniej: </label><br />

                    <input type="radio" name="termin" value="1lipca - 15 lipca" required="required" data-validation-required-message="Wybierz termin" />
                    <label >
                        <a id="tekst1">1 lipca - 15 lipca</a>

                        <div id="obrazek1"></div>
                    </label>

                    <input type="radio" name="termin" value="17 lipca - 31 lipca" required="required" data-validation-required-message="Wybierz termin" />
                    <label>

                        <a id="tekst2">17 lipca - 31 lipca</a>

                        <div id="obrazek2"></div>
                    </label>

                    <input type="radio" name="termin" value="7 sierpnia - 21 sierpnia" required="required" data-validation-required-message="Wybierz termin" />

                    <label>

                        <a id="tekst3">7 sierpnia - 21 sierpnia</a>

                        <div id="obrazek3"></div>
                    </label>

                </div>


                <div id='pole_nocleg'>
                    <label>Potrzebujesz noclegu? </label><br />

                    <input
                        type="radio"
                        name="nocleg"
                        value="TAK"
                        required={true}
                        data-validation-required-message="Wybierz opcję"
                    />
                    <label>

                        TAK
                    </label>
                    <input
                        type="radio"
                        name="nocleg"
                        value="NIE"
                        required={true}
                        data-validation-required-message="Wybierz opcję"
                    />
                    <label>
                        NIE
                    </label>

                </div>
                <div class="przyciski">
                    <button type="submit" id="sub_button" class="bnt_sub" onclick={scrollToTop()}>Prześlij formularz</button>
                    <button type="button" class="bnt_but" onClick={() => window.location.reload()} onclick={scrollToTop()}>Wyczyść formularz</button>
                </div>

                {/* <button type="reset" id="clear_button">Wyczyść formularz</button> */}
            </form>
        </div>

    )
}
export default Form; 