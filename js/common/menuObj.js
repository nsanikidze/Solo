export const menu = {
    topMenu: [
        {
            text: "SOLO",
            class: `class="active-nav-item"`,
        },
        {
            text: "ფიზიკური პირი",
            class: "",
        },
        {
            text: "ბიზნესი",
            class: "",
        },
        {
            text: "Wealth",
            class: "",
        },
        {
            text: "შეტავაზებები",
            class: "",
        },
    ],
    icon: [
        { class: "location-icon",
           svg:  `<svg style="pointer-events: none; display: block; width: 16px; height: 16px;"
           width="48px" height="48px" viewBox="0 0 48 48" version="1.1"
           xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
           <g id="icons-48-contacts-pin-fill" stroke="none" stroke-width="1" fill="none"
               fill-rule="evenodd">
               <rect id="shape" x="0" y="0" width="48" height="48"></rect>
               <path
                   d="M22.0818367,45.3783674 C22.4412946,45.9428454 23.0641548,46.2846371 23.7333673,46.2846371 C24.4025799,46.2846371 25.0254401,45.9428454 25.384898,45.3783674 L37.3236735,26.2763265 C41.5246723,19.5598884 40.189309,10.781914 34.1810795,5.61857099 C28.1728501,0.455227961 19.2938846,0.455227961 13.2856551,5.61857099 C7.27742573,10.781914 5.9420624,19.5598884 10.1430612,26.2763265 L22.0818367,45.3783674 Z M27.1977551,10.825102 C29.6399363,12.6841419 30.118628,16.1682028 28.2683221,18.6170079 C26.4180162,21.065813 22.9356871,21.5569448 20.4802893,19.7153965 C18.0248916,17.8738482 17.521326,14.3932954 19.3540932,11.9313363 C21.1868605,9.46937716 24.6655926,8.95338412 27.1340816,10.7773469 L27.1977551,10.825102 Z"
                   id="contacts-:-pin-:-fill" fill="currentColor" fill-rule="nonzero"></path>
           </g>
       </svg>`},
        { class: "exchange-icon",
        svg:  ` <svg style="pointer-events: none; display: block; width: 16px; height: 16px;"
        width="48px" height="48px" viewBox="0 0 48 48" version="1.1"
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="icons-48-payment_transfer-exchange-" stroke="none" stroke-width="1" fill="none"
            fill-rule="evenodd">
            <rect id="shape" x="0" y="0" width="48" height="48"></rect>
            <path
                d="M3.7046305,26.9048276 C4.10973335,26.8116704 4.53529503,26.8865726 4.88424539,27.1124492 C5.23319575,27.3383258 5.47577469,27.6959129 5.55665021,28.1036453 C7.46294306,36.7468568 15.1492386,42.8830828 24,42.8275862 C28.1971783,42.831861 32.2785727,41.451588 35.6116256,38.9006897 L35.6116256,38.9006897 L34.4896552,37.7249261 C34.084179,37.2914757 33.9645248,36.6632915 34.182266,36.111133 C34.4032536,35.5536522 34.9283054,35.1756149 35.5270936,35.1428572 L35.5270936,35.1428572 L40.7603941,34.7586207 C41.2393537,34.7178071 41.7110829,34.8957648 42.0437439,35.2427586 C42.3600636,35.5811715 42.5068781,36.0442018 42.4433498,36.5030542 L42.4433498,36.5030542 L41.6748769,41.5749754 C41.5900411,42.1660584 41.1705196,42.6545013 40.5990148,42.8275862 C40.0244289,43.0026895 39.400208,42.839203 38.9852217,42.4049261 L38.9852217,42.4049261 L37.7710345,41.1292611 C33.8452871,44.2184677 28.9954664,45.8991254 24,45.9014779 C13.6725665,45.9657015 4.70468564,38.8042081 2.48275858,28.7184237 C2.40168229,28.3156257 2.48526211,27.8971348 2.71483872,27.5563795 C2.94441533,27.2156243 3.30087247,26.9809787 3.7046305,26.9048276 Z M26.3361576,12.8264039 C27.201966,12.8264039 27.9038424,13.5282803 27.9038424,14.3940887 L27.9038424,14.3940887 L27.9038424,16.6457143 L28.2189163,16.7917241 C30.5449797,18.0572191 32.1560064,20.3262709 32.5838424,22.9395074 C32.6475371,23.3466443 32.5450675,23.7623056 32.2994353,24.0931867 C32.053803,24.4240678 31.6855858,24.6424492 31.2774384,24.6993103 C30.8690516,24.7724186 30.4484545,24.6773198 30.1112452,24.4356289 C29.7740358,24.1939381 29.5488594,23.8261864 29.4868966,23.4159606 C29.3016475,22.248359 28.746786,21.1709579 27.9038424,20.342069 L27.9038424,20.342069 L27.9038424,21.3103448 C27.9038424,22.1761532 27.201966,22.8780296 26.3361576,22.8780296 C25.4703493,22.8780296 24.7684729,22.1761532 24.7684729,21.3103448 L24.7684729,21.3103448 L24.7684729,18.7666995 C24.2583136,18.7002303 23.7416864,18.7002303 23.2315271,18.7666995 L23.2315271,18.7666995 L23.2315271,21.3103448 C23.2315271,22.1803974 22.5262102,22.8857143 21.6561576,22.8857143 C20.7861051,22.8857143 20.0807882,22.1803974 20.0807882,21.3103448 L20.0807882,21.3103448 L20.0807882,20.1038424 C19.5485793,20.5647703 19.1236678,21.1365648 18.8358621,21.7791133 C18.0090132,23.5190746 18.1369175,25.5622736 19.1743042,27.1855337 C20.2116908,28.8087938 22.0121881,29.7830787 23.9385222,29.7635468 L23.9385222,29.7635468 L30.0171429,29.7635468 C30.8659746,29.7635468 31.5540887,30.4516609 31.5540887,31.3004926 C31.5540887,32.1493244 30.8659746,32.8374384 30.0171429,32.8374384 L30.0171429,32.8374384 L16.9531034,32.8374384 C16.1042717,32.8374384 15.4161576,32.1493244 15.4161576,31.3004926 C15.4161576,30.4516609 16.1042717,29.7635468 16.9531034,29.7635468 L16.9531034,29.7635468 L17.222069,29.7635468 C17.0076533,29.5191299 16.8075178,29.2625459 16.6226601,28.9950739 C14.9566714,26.4934741 14.7149449,23.3044318 15.9848276,20.5802956 C16.797977,18.7420975 18.2703077,17.2752503 20.1115271,16.4689655 L20.1115271,16.4689655 L20.1115271,14.3940887 C20.1115271,13.5452569 20.7996412,12.8571428 21.6484729,12.8571428 C22.0640252,12.8446706 22.4669045,13.0010755 22.7651885,13.2906716 C23.0634725,13.5802677 23.2317142,13.9783493 23.2315271,14.3940887 L23.2315271,14.3940887 L23.2315271,15.7004926 C23.742882,15.65613 24.257118,15.65613 24.7684729,15.7004926 L24.7684729,15.7004926 L24.7684729,14.3940887 C24.7684729,13.5282803 25.4703493,12.8264039 26.3361576,12.8264039 Z M24,2.86699503 C34.3274335,2.80277141 43.2953144,9.96426486 45.5172414,20.0500493 C45.6075981,20.4573716 45.5284753,20.8839257 45.2980454,21.2317444 C45.0676155,21.5795632 44.7056816,21.8187549 44.2953695,21.8943842 C44.1906222,21.9051777 44.0850429,21.9051777 43.9802956,21.8943842 C43.2383185,21.9093475 42.5916245,21.3919923 42.4433498,20.6648276 C40.5370569,12.0216161 32.8507614,5.88539015 24,5.94088666 C19.7904568,5.94255121 15.6997125,7.33675468 12.3653202,9.90620687 L12.3653202,9.90620687 L13.5103448,11.0819704 C13.915821,11.5154208 14.0354752,12.143605 13.817734,12.6957635 C13.5967464,13.2532444 13.0716946,13.6312817 12.4729064,13.6640394 L12.4729064,13.6640394 L7.20886696,14.0175369 L7.10896548,14.0175369 C6.67343277,14.019145 6.25647678,13.8412438 5.95625612,13.5257143 C5.63993638,13.1873014 5.4931219,12.7242712 5.55665021,12.2654187 L5.55665021,12.2654187 L6.32512312,7.1934975 C6.40995885,6.60241453 6.82948035,6.11397164 7.40098519,5.94088666 C7.97557105,5.76578345 8.59979198,5.92926989 9.0147783,6.36354676 L9.0147783,6.36354676 L10.2289655,7.63921179 C14.1547129,4.55000524 19.0045336,2.86934752 24,2.86699503 Z"
                id="Combined-Shape" fill="currentColor" fill-rule="nonzero"></path>
        </g>
    </svg>`},
    ],
    menuItems: [
        {
            text: "მთავარი",
        },
        {
            text: "ბანკინგი",
        },
        {
            text: "ელექტრონული ბანკი",
        },
        {
            text: "Lyfestyle",
        },
        {
            text: "შეთავაზებები დეველოპერებისგან",
        },
        {
            text: "ჩვენ შესახებ",
        },
    ],
}