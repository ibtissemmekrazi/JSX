import React from 'react'


function Profile() {
    const name="Ibtissem";
    const age=38;
    const profession="student";
    const address="teblbou gabes pres mg"
  return (
    <div className='profile'>
       <div className='box1'>
        <img src="https://pipcke.fr/idees-deco/wp-content/uploads/2021/02/boutique-rose-amenagement-interieur-1160x1596.jpg.webp"/>
        <h3>{name}</h3>
        <p>{address}</p>
       </div>
       <div className='box2'>
        <img src="https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/mode/les-news-mode/l-instant-mode-celles-qui-aiment-le-rose-vont-se-ruer-chez-merci-3613616/85770326-6-fre-FR/L-instant-mode-celles-qui-aiment-le-rose-vont-se-ruer-chez-MERCI.jpg"/>
        <h3>Fashion Shop</h3>
        <p>C'est un boutique des vetements</p>
       </div>
    </div>
  )
}

export default Profile