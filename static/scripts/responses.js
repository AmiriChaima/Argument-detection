function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello Doctor") {
        return "Hello how can i help you sir!";
    } else if (input == "Doctor I have some questions to ask about Coronavirus") {
        return "Yes of course with pleasure!";
    }
    else if (input == "what is Coronavirus exactly?") {
        return "Coronaviruses are a family of viruses that typically cause mild respiratory infections like the common cold but also more severe (and potentially deadly) infections. They are zoonotic diseases, meaning they are transmitted from animals to people.";
    }
    else if (input == "what diseases are caused by Coronavirus ?") {
        return "A coronavirus that originated in China led to the Severe Acute Respiratory Syndrome (SARS) outbreak in 2003. Another coronavirus emerged in 2012 in Saudi Arabia, causing Middle East Respiratory Syndrome (MERS)";
    }
    else if (input == "why Coronavirus caused shortest of breath") {
        return "COVID-19 can cause damage to the lungs that impedes their ability to remove oxygen from the air. A lot of patients develop what’s known as severe acute respiratory distress syndrome. And they really benefit from having additional oxygen, particularly in hospital settings.";
    }
    else if (input == "why and how seek medical attention!") {
        return "If you develop any of the following emergency warning signs for COVID-19, get medical attention immediately by calling your doctor's office. Emergency warning signs include Trouble breathing,Persistent pain or pressure in the chest,New confusion or inability to arouse,Bluish lips or face";
    }

    else if (input == "how is CoronoVirus transmitted?") {
        return "Coronaviruses are typically transmitted from person to person through exhalation of respiratory droplets (from the nose and mouth) and close contact. People can contract COVID-19 if they breathe in droplets from an infected person who coughs or exhales droplets. Those droplets can also land on objects and surfaces, and people can then catch the virus from touching those surfaces and then touching their eyes, nose, or mouth.";
    }

    else if(input == "what are the symptoms of corona virus?")
    {
        return" People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus. Anyone can have mild to severe symptoms. People with these symptoms may have COVID-19 :Fever or chills,Cough,Shortness of breath or difficulty breathing,Fatigue,Muscle or body aches,Headache,New loss of taste or smell,Sore throat,Congestion or runny nose,Nausea or vomiting,Diarrhea";
    }
    else if(input=="what are the different types of covid tests?")
    {
        return"There are various types of COVID-19 tests that people may choose from to find out if they are infected with the virus for example :PCR test, Rapid (antigen) test, Serologic test,etc";
        
    }

    else if (input=="what should I do if I test positive for coronavirus?")
    {
 return " you should stay home, take care of your self, stay in touch with your doctorand and Avoid public transportation"
    }

 else if (input=="And what about tha variants of coronavirus? which is the most dangerous one?")
 {
     return "Variant Alpha, Gamma, Beta, Delta and now C.1.2... Several variants of the coronavirus responsible for Covid-19 have been detected around the world. With several mutations, some would be more contagious than the original strain."
 }

    else {
        return "Try asking something else!";
    }
}