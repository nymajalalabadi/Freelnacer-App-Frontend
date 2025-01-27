import TextField from '../../ui/TextField';
import Loading from '../../ui/Loading';

function SendOPTFrom({ phoneNumber, onChange, isPending, sendOptsHandler }) {
  
  return (
    <div>
      <form className="space-y-10" onSubmit={sendOptsHandler}>
        <TextField label="Phone number" name="phonenumber" value={phoneNumber} onChange={onChange}/>
        <div>
          {isPending ? (
            <Loading/>
          ) : (
            <button type="submit" className="btn btn--primary w-full">Send verification code</button>
          )}
        </div>
      </form>
    </div>
  )
}

export default SendOPTFrom

