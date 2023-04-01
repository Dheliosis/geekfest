import React, { useEffect, useState } from 'react';
import logo from './mydigitalschool-white.webp';
import './App.css';
import RadioButton from './components/radio';
import { questionsList } from './lib/questions';

function App() {
  const [teamResult, setTeamResult] = useState("none")
  const [questions, setQuestions] = useState(questionsList)
  const [displayQuestion, setDisplayQuestion] = useState(false)

  useEffect(() => {
    const shuffledArray = questions.sort((a, b) => 0.5 - Math.random());
    console.log(shuffledArray);
    setQuestions(shuffledArray)
    setDisplayQuestion(true)

  }, [])


  const calculResult = () => {
    const team = {
      d: 0,
      m: 0,
      u: 0
    }
    for (let question of questions) {
      let isResponded = false
      for (let response of question.responses) {
        if (response.isCheck) {
          isResponded = true
          break
        }
      }

      if (!isResponded) {
        alert("Tu dois répondre à toutes les questions !")
        return
      }

      for (let response of question.responses) {
        if (response.isCheck) {
          switch (response.type) {
            case "D":
              team.d++
              break;
            case "M":
              team.m++
              break
            case "U":
              team.u++
              break
            default:
              break;
          }
        }
      }
    }

    console.log(team);

    setTeam(team)

  }

  const setTeam = (team: any) => {
    if (team.d > team.m && team.d > team.u) {
      setTeamResult("DÉVELOPPEMENT")
      return
    }
    if (team.m > team.d && team.m > team.u) {
      setTeamResult("MARKETING")
      return
    }
    if (team.u > team.m && team.u > team.d) {
      setTeamResult("DESIGN")
      return
    }
    if (team.d === team.m && team.d !== team.u) {
      setTeamResult("MARKETING et le DÉVELOPPEMENT")
      return


    }
    if (team.d === team.u && team.d !== team.m) {
      setTeamResult("DESIGN et le DÉVELOPPEMENT")
      return


    }
    if (team.m === team.u && team.m !== team.d) {
      setTeamResult("DESIGN et le MARKETING")
      return

    }
    if (team.m === team.u && team.m === team.d) {
      setTeamResult("DESIGN, le MARKETING et le DÉVELOPPEMENT... Ouais ça t'aide beaucoup on sait")
      return

    }

  }
  return (
    <div className="App relative">
      <header className="">
        <div className='w-full min-h-40 flex flex-col justify-center items-center bg-mds-blue py-5'>
          <img src={logo} alt="mds-logo" className='h-16'></img>
          <p className='text-white text-3xl mt-2'>Découvre ta team</p>
        </div>
      </header>
      <body>
        {!displayQuestion ? null :
          <div className='mx-4'>
            {questions.map(question => (
              <div className='my-4'>
                <RadioButton question={question} />
              </div>
            ))}
            <div className='flex justify-center items-center my-7'>
              <button onClick={() => calculResult()} className='bg-mds-blue px-3 py-2 text-white focus:bg-mds-dark-blue'> Découvre ton équipe !</button>
            </div>
          </div>
        }
        <div>
          {teamResult === "none" ? null :
            (
              <div className='bg-mds-blue w-full h-full text-white flex flex-col items-center p-5 fixed top-0'>
                <img src={logo} alt="mds-logo" className='h-16 mb-32'></img>

                <div className='flex flex-col justify-center items-center text-3xl'>
                  <p>Félicitation, tu es fait pour t'orienter dans le</p>
                  <p>{teamResult}</p>
                </div>
              </div>
            )}
        </div>
      </body>
    </div>
  );
}

export default App;
