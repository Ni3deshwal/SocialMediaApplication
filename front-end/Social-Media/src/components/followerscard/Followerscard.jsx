
import fc from '../followerscard/Followerscard.module.css'
import {Followersdata} from '../../Data/Followersdata.jsx'

function Followerscard() {
  return (
    <div className={fc.followerscard}><h3>Who is following you.</h3>
    {Followersdata.map((follower,id)=>{
      return(
        <div className={fc.follower}>
          <div>
            <img src={follower.img} alt="user1" className={fc.followerimg} />
            <div className={fc.name}>
              <span>{follower.name}</span>
              <span>@{follower.username}</span>
            </div>
          </div>
          <button className={fc.fc_button} >Follow</button>
        </div>
      )
    })}
    </div>
    
  )
}

export default Followerscard