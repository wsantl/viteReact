import './style.css'
import IconTrash from '../../assets/trash.svg'

function Home() {

  const users = [
    {
      id: '184616',
      name: 'Arsene',
      age: 28,
      email: 'arsene@email.com',
    },
    {
      id: '164486',
      name: 'Lupin',
      age: 35,
      email: 'lupin@email.com',
    },
  ]


  return (

    <div className='container'>

      <form>

        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='nome' type='text' />
        <input placeholder='Idade' name='idade' type='number' />
        <input placeholder='E-mail' name='email' type='email' />
        <button type='button'> Cadastrar </button>

      </form>

      {users.map(user => (

        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span> {user.name} </span> </p>
            <p>Idade: <span> {user.age} </span> </p>
            <p>Email: <span> {user.email} </span> </p>
          </div>
          <button>
            <img src={IconTrash} />
          </button>
        </div>

      ))}


    </div>
  )
}

export default Home
