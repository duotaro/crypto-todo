import Head from 'next/head';

import { useState, useEffect } from 'react';


const Guild = () => {
  
  const [GuildList, setGuildList] = useState([])

    const defaultList = [
        {name:'Phi', address:'https://guild.xyz/phi'},
        {name:'Lens Protocol', address:'https://guild.xyz/lens-protocol'},
        {name:'Trader Joe', address:'https://guild.xyz/joe'},
        {name:'CyberConnect', address:'https://guild.xyz/cyberconnect'},
        {name:'ZetaChain', address:'https://guild.xyz/zetachain'},
        {name:'SyncSwap', address:'https://guild.xyz/syncswap'},
        {name:'Light', address:'https://guild.xyz/light'},
        

    ]

    // クライアントでの初期レンダリング直後にローカルストレージの設定を反映
    useEffect(() => {
        let userList = localStorage.getItem(Guild_LIST_KEY);
        let list = defaultList
        /**
         * ここでユーザー設定の値とユニークになるようにする userList
         */
        console.log(list)
        setGuildList(list)
    })

    const GuildLink = (data) => {
        return `https://Guild.com/profile/${data.address}/`
    }

    return (
        <div className="root">
        <Head>
            <title>Guild List</title>
        </Head>
        <div className="container">
            <div className="header">
            <div className="header-title">
                <h1>home</h1>
            </div>
            <div className="prompt-container">
              <div className='center'>
                {GuildList.map((data) => {
                  return (
                    <div key={data.name} className='list'>
                      <a href={GuildLink(data)}
                      className='target-img'
                      data-val={data.name} 
                      alt={data.name}>{data.name}</a>
                    </div>
                  );
                })}
              </div>
            </div>
            </div>
        </div>
        <div className="badge-container grow">
            sub_contents
        </div>
        </div>
    )
};

export default Guild;
