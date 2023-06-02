import { useRef, useState } from 'react'

import './css/form_style.css'
const Form = () => {


    const [mailPlaceholder, setMailPlaceholder] = useState('E-mail');

    const handleMouseEntermail = () => {
        setMailPlaceholder('Format: login@domain');
    };

    const handleMouseLeavemail = () => {
        setMailPlaceholder('E-mail');
    };


    const [telPlaceholder, setTelPlaceholder] = useState('Numer telefonu');

    const handleMouseEntertel = () => {
        setTelPlaceholder('Format: 123456789');
    };

    const handleMouseLeavetel = () => {
        setTelPlaceholder('Numer telefonu');
    };

    const [adresPlaceholder, setAdresPlaceholder] = useState('Adres');

    const handleMouseEnteradres = () => {
        setAdresPlaceholder('Format: Polna 2/3');
    };

    const handleMouseLeaveadres = () => {
        setAdresPlaceholder('Adres');
    };

    const [kodPlaceholder, setKodPlaceholder] = useState('Kod pocztowy');

    const handleMouseEnterkod = () => {
        setKodPlaceholder('Format: 12-345');
    };

    const handleMouseLeavekod = () => {
        setKodPlaceholder('Kod pocztowy');
    };

    return (

        <div>

            <form id="form" acceptCharset="UTF-8">
                <h1><strong>Formularz rejestracyjny na szkołę letnią</strong></h1>

                <input type="text" className="wejscie" id="name" pattern="[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{0,20}" placeholder="Imię" aria-label="Wpisz swoje imię" data-validation-required-message="Podaj swoje imię" required />

                <input type="text" class="wejscie" id="nazwisko" pattern="[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{0,20}" placeholder="Nazwisko" required={true} data-validation-required-message="Podaj swoje nazwisko" /><br />

                <input type="email" class="wejscie" id="email" placeholder={mailPlaceholder} required={true} data-validation-required-message="Podaj swój email" onMouseEnter={handleMouseEntermail} onMouseLeave={handleMouseLeavemail} />


                <input type="tel" class="wejscie" id="nr_tel" pattern="[0-9]{0,9}" placeholder={telPlaceholder} required={true} data-validation-required-message="Podaj numer telefonu" onMouseEnter={handleMouseEntertel} onMouseLeave={handleMouseLeavetel} /><br />

                <input type="text" class="wejscie" id="ulica" placeholder={adresPlaceholder} required={true} data-validation-required-message="Ulica" onMouseEnter={handleMouseEnteradres} onMouseLeave={handleMouseLeaveadres} />

                <input type="text" class="wejscie" id="miasto" pattern="[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]{0,100}" placeholder="Miejscowość" required={true} data-validation-required-message="Podaj swoja Miejscowość" />

                <input type="text" class="wejscie" id="kod" pattern="[0-9]{2}-[0-9]{3}" placeholder={kodPlaceholder} required={true} data-validation-required-message="Kod pocztowy" onMouseEnter={handleMouseEnterkod} onMouseLeave={handleMouseLeavekod} /><br />

                <input type="text" class="wejscie" id="rok" pattern="[0-9]{4}" placeholder="Rok urodzenia" required={true} data-validation-required-message="Podaj rok urodzenia" onfocus="(this.type='date')" /><br />

                <input type="text" class="wejscie" id="uczelnia" pattern="[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]{0,100}" placeholder="Nazwa uczelni" required={true} data-validation-required-message="Podaj nazwę uczelni" /><br />

                <div id='pole_rok'>
                    <label>Wybierz rok studiów:</label>

                   <div>
                        <input
                            type="range"
                            id="rok_studow"
                            className="wejscie"
                            name="rok_studow"
                            required={true}
                            min="1"
                            max="3"
                            step="1"
                            data-validation-required-message="Podaj rok studiów"
                            list="rok_studow_scale"

                        />
                        <datalist id="rok_studow_scale">
                            <option value="1" label="1" />
                            <option value="2" label="2" />
                            <option value="3" label="3" />
                        </datalist>
                        <div class="slider-labels">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                        </div>

                    </div>

                </div>


                <div id='pole_temat'>
                    <label class="temat-label">
                        <input
                            type="radio"
                            name="temat"
                            value="Kurs Programowania"
                            required={true}
                            data-validation-required-message="Podaj temat"
                        />
                        <a id="tekst_temat1">Kurs Programowania</a>
                        <div id="obrazek_temat1"></div>
                    </label>

                    <label class="temat-label">
                        <input
                            type="radio"
                            name="temat"
                            value="Obsługa baz danych"
                            required={true}
                            data-validation-required-message="Podaj temat"
                        />
                        <a id="tekst_temat2">Obsługa baz danych</a>
                        <div id="obrazek_temat2"></div>
                    </label>

                    <label class="temat-label">
                        <input
                            type="radio"
                            name="temat"
                            value="Grafika komputerowa"
                            required={true}
                            data-validation-required-message="Podaj temat"
                        />
                        <a id="tekst_temat3">Grafika komputerowa</a>
                        <div id="obrazek_temat3"></div>
                    </label>

                    <label class="temat-label">
                        <input
                            type="radio"
                            name="temat"
                            value="Sieci komputerowe"
                            required={true}
                            data-validation-required-message="Podaj temat"
                        />
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
                    <label class="termin-label">
                        <span></span>
                        <input type="radio" name="termin" value="1lipca - 15 lipca" required="required" data-validation-required-message="Wybierz termin" />
                        <a id="tekst1">1 lipca - 15 lipca</a>
                        <div id="obrazek1"></div>
                    </label>

                    <label class="termin-label">
                        <input type="radio" name="termin" value="17 lipca - 31 lipca" required="required" data-validation-required-message="Wybierz termin" />
                        <a id="tekst2">17 lipca - 31 lipca</a>
                        <div id="obrazek2"></div>
                    </label>

                    <label class="termin-label">
                        <input type="radio" name="termin" value="7 sierpnia - 21 sierpnia" required="required" data-validation-required-message="Wybierz termin" />
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
                    <button type="submit" id="sub_button" class="bnt_sub">Prześlij formularz</button>
                    <button type="button" class="bnt_but" onClick={() => window.location.reload()}>Wyczyść formularz</button>
                </div>






            </form>
        </div>

    )
}
export default Form; 