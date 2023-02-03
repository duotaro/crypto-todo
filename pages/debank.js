import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import { useState, useEffect } from 'react';
import {DEBANK_LIST_KEY} from '../utils/const'

const Debank = () => {
  
  const [debankList, setDebankList] = useState([])

    const defaultList = [
        {name:'わたっちさん', address:'0x0e2e091221b1d79cce17f240515443dc139c7d90'},
        {name:'もこさん', address:'0x4cd8bda7c7dd00656f2fc7520ed1035e76b24399'},
        {name:'もこさん2', address:'0xbefe9091541d2fd2bb2b931536fbee0383c4c4e0'}
    ]

    // クライアントでの初期レンダリング直後にローカルストレージの設定を反映
    useEffect(() => {
        let userList = localStorage.getItem(DEBANK_LIST_KEY);
        let list = defaultList
        /**
         * ここでユーザー設定の値とユニークになるようにする userList
         */
        console.log(list)
        setDebankList(list)
    })

    const debankLink = (data) => {
        return `https://debank.com/profile/${data.address}/`
    }

    return (
        <div className="root">
        <Head>
            <title>Debank List</title>
        </Head>
        <div className="container">
            <div className="header">
            <div className="header-title">
                <h1>home</h1>
            </div>
            <div className="prompt-container">
              <div className='center'>
                {debankList.map((data) => {
                  return (
                    <div key={data.name} className='list'>
                      <a href={debankLink(data)}
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

export default Debank;
