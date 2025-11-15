import React from 'react'
import HolyTrinityShawn from '../../img/HolyTrinityShawn.jpg'
import HolyTrinitySis from '../../img/HolyTrinitySis.jpg'
import HolyTrinityStewart from '../../img/HolyTrinityStewart.jpg'
export default function Giving() {
    return (
        <>
        <h1>Giving</h1>
        <br />
        <h2>"Bring all the tithes into the storehouse,<br />
That there may be food in My house,<br />
And try Me now in this,<br />
Says the Lord of hosts<br />
If I will not open for you the windows<br /> of heaven<br />
And pour out for you such blessing<br /> 
That there will not be room enough to receive it...<br /><br />

Malachi 3:10<br /><br /></h2>

<hr />
<br />
<h2 style={{ color: "#f3d14a"}}>Way to Give</h2>
<br />
<h4 style={{ textAlign: "center"}}><a href="https://www.givelify.com/donate/NjEyOTY=/selection" target="_blank">Givelify</a><br /><br /><br /></h4>
<br />
<div class="giving-img">
<img src={HolyTrinityShawn} width="250" height="250" />
</div>
<h4 style={{ textAlign: "center"}}>Minister Shawn Fallin (Chairman)</h4>
<br />
<div style={{ textAlign: "center"}}>Team Members</div>
<br />
<div class="giving-img">
<img src={HolyTrinityStewart} width="250" height="250" />
</div>
<h4 style={{ textAlign: "center"}}>Sister Eldora Stewart</h4>
<br /> 
<div class="giving-img">
<img src={HolyTrinitySis} width="250" height="250" />
</div>
<h4 style={{ textAlign: "center"}}>Sister M. Kirin Ford</h4>
<br /><br />
<h4 style={{ textAlign: "center"}}>We thank you in advance for your faithful commitment<br /> 
    toward resourcing God's ministry and mission through Holy Trinity.</h4>
   </> 
    )
}