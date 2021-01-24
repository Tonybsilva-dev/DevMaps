import React from 'react';

function DevItem({ dev }){
  return(
    <li className="dev-item" style={{
      background: '#FFFFFF',
      boxShadow: '0 0 14px 0 rgba(0,0,0,0.02)',
      borderRadius: '2px',
      padding: '20px',
     }} >
                      <header style={{
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: 'center'
                      }} >
                        <img src={dev.avatar_url} alt={dev.name} style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '50%'
                        }}/>
                        <div className="user-info" style={{
                          marginLeft: '10px'
                        }} >
                          <strong style={{ display: 'block', fontSize: '16px', color: '#333333' }} >{dev.name}</strong>
                          <span style={{ fontSize: '13px', color: '#999999', marginTop: '2px' }} >{dev.techs.join(', ')}</span>
                        </div>
                      </header>
                      <p style={{ color: '#666666', fontSize: '14px', lineHeight: '20px', margin: '10px 0' }} >
                      {dev.bio}
                      </p>
                      <a href={`https://github.com/${dev.github_username}` } style={{
                        color: '#000000',
                        fontSize: '14px',
                        textDecoration: 'none',
                        alignSelf: 'center'
                      }} >Acessar perfil no Github</a>
                    </li>
  );
}

export default DevItem;