import React from 'react'
import './css/form_style.css'
const Form = () => {
    return (

        <div>

            <form id="form" netlify>
                <h1><strong>Formularz rejestracyjny na szkołę letnią</strong></h1>

                <input type="text" class="wejscie" id="name" pattern="[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{0,20}" placeholder="Imię" required={true} aria-label="Wpisz swoje imię" data-validation-required-message="Podaj swoje imię" />

                <input type="text" class="wejscie" id="nazwisko" pattern="[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{0,20}" placeholder="Nazwisko" required="required" data-validation-required-message="Podaj swoje nazwisko" />

                <input type="email" class="wejscie" id="email" placeholder="E-mail" required="required" data-validation-required-message="Podaj swój email" />

                <input type="tel" class="wejscie" id="nr_tel" pattern="[0-9]{0,9}" placeholder="Numer telefonu" required="required" data-validation-required-message="Podaj numer telefonu" />

                <input type="text" class="wejscie" id="ulica" pattern="[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{0,100}" placeholder="Ulica" required="required" data-validation-required-message="Ulica" />

                <input type="text" class="wejscie" id="nr_domu" placeholder="Numer domu/mieszkania" required="required" data-validation-required-message="Podaj numer domu/mieszkania" />

                <input type="text" class="wejscie" id="kod" pattern="[0-9]{2}-[0-9]{3}" placeholder="Kod pocztowy" required="required" data-validation-required-message="Kod pocztowy" />

                <input type="text" class="wejscie" id="miasto" pattern="[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]{0,100}" placeholder="Miejscowość" required="required" data-validation-required-message="Podaj swoja Miejscowość" />

                <input type="text" class="wejscie" id="rok" pattern="[0-9]{4}" placeholder="Rok urodzenia" required="required" data-validation-required-message="Podaj rok urodzenia" onfocus="(this.type='date')" />

                <input type="text" class="wejscie" id="uczelnia" pattern="[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]{0,100}" placeholder="Nazwa uczelni" required="required" data-validation-required-message="Podaj nazwę uczelni" />

                <input type="text" class="wejscie" id="kierunek" pattern="[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ ]{0,100}" placeholder="Kierunek studiów" required="required" data-validation-required-message="Podaj kierunek, który studiujesz" />


                <select name="rok_studow" class="wejscie" id="rok_studow" required="required" data-validation-required-message="Podaj rok studiow" >
                    <option value="" disabled selected hidden>Rok studiów</option>
                    <option value="Rok 1">Rok 1</option>
                    <option value="Rok 2">Rok 2</option>
                </select>

                <select name="temat" class="wejscie" id="temat" required="required" data-validation-required-message="Podaj temat" >
                    <option value="" disabled selected hidden>Temat warsztatów</option>
                    <option>Kurs Programowania</option>
                    <option>Obsługa baz danych</option>
                    <option>Grafika komputerowa</option>
                    <option>Sieci komputerowe</option>
                </select>

                <select name="poziom" class="wejscie" id="poziom" required="required" data-validation-required-message="Podaj swoj poziom" >
                    <option value="" disabled selected hidden>Poziom języka angielskiego</option>
                    <option>B1</option>
                    <option>B2</option>
                    <option>C1</option>
                </select>

                <select name="text" class="wejscie" id="termin" required="required" data-validation-required-message="Wybierz termin" >
                    <option value="" disabled selected hidden>Termin szkoły letniej</option>
                    <option>30 czerwca - 14 lipca</option>
                    <option>17 lipca -  31 lipca</option>
                    <option>7 sierpnia - 21 sierpnia</option>
                </select>

                <select name="nocleg" class="wejscie" id="nocleg" required="required" data-validation-required-message="Wybierz opcje" >
                    <option value="" disabled selected hidden>Potrzebujesz nocelgu?</option>
                    <option>TAK</option>
                    <option>NIE</option>
                </select>

                <div class="przyciski">
                    <button type="submit" id="sub_button" class="bnt_sub">Prześlij formularz</button>
                    <button type="button" class="bnt_but" onClick={() => window.location.reload()}>Wyczyść formularz</button>
                </div>

                {/* <button type="reset" id="clear_button">Wyczyść formularz</button> */}
            </form>
        </div>

    )
}
export default Form; 