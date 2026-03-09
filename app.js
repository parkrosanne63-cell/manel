/* DATA */
const tutorials=[
  {id:1,title:"Arduino for Complete Beginners",desc:"Learn Arduino from scratch — wiring, coding, and your first blinking LED in under 30 minutes.",tags:["Arduino","C++"],cat:"arduino",lvl:"b",dur:"2:45",inst:"Alex M.",ini:"AM",students:5420,lessons:22},
  {id:2,title:"ROS2 Humble: Full Navigation Stack",desc:"Build a fully autonomous robot with ROS2 Nav2, SLAM, and LIDAR sensor fusion.",tags:["ROS2","Python","SLAM"],cat:"ros",lvl:"a",dur:"8:20",inst:"Sara K.",ini:"SK",students:2180,lessons:38},
  {id:3,title:"Object Detection with Raspberry Pi",desc:"Train and deploy YOLOv8 on Raspberry Pi 5 for real-time object recognition.",tags:["ML","Pi","Python"],cat:"ml",lvl:"i",dur:"5:00",inst:"David L.",ini:"DL",students:3340,lessons:24},
  {id:4,title:"DC & Stepper Motor Control Mastery",desc:"Control speed, direction, and position with L298N, A4988 and PID loops.",tags:["Motors","Arduino"],cat:"motors",lvl:"b",dur:"3:10",inst:"Nora R.",ini:"NR",students:4210,lessons:18},
  {id:5,title:"Ultrasonic & IR Sensor Deep Dive",desc:"Master HC-SR04, Sharp IR, and ToF sensors for obstacle avoidance.",tags:["Sensors","Arduino"],cat:"sensors",lvl:"b",dur:"1:50",inst:"Alex M.",ini:"AM",students:6890,lessons:12},
  {id:6,title:"ESP32 WiFi Robot: Web-Controlled Car",desc:"Create a robot car controllable from any browser over WiFi using ESP32 and WebSockets.",tags:["ESP32","WiFi","IoT"],cat:"arduino",lvl:"i",dur:"4:30",inst:"Sara K.",ini:"SK",students:3120,lessons:20},
];
const products=[
  {id:1,name:"Arduino Uno R4 WiFi",cat:"Microcontroller",price:27.99,old:null,icon:"./arduino.jpg",badge:"n",rating:4.9,reviews:312,stock:true},
  {id:2,name:"Raspberry Pi 5 (4GB)",cat:"Single Board PC",price:74.99,old:89.99,icon:"./raspberry pi.jpg",badge:"h",rating:4.9,reviews:524,stock:true},
  {id:3,name:"ESP32-S3 DevKit",cat:"WiFi + BT Module",price:11.99,old:16.99,icon:"./esp32.jpg",badge:"s",rating:4.8,reviews:198,stock:true},
  {id:4,name:"37-in-1 Sensor Kit",cat:"Sensors Bundle",price:22.99,old:34.99,icon:"./37 in 1.jpg",badge:"s",rating:4.7,reviews:445,stock:true},
  {id:5,name:"MG996R Servo Motor ×4",cat:"Actuators",price:18.50,old:null,icon:"./servo motor.jpg",badge:"n",rating:4.8,reviews:137,stock:true},
  {id:6,name:"LIDAR TF-Luna Module",cat:"Distance Sensor",price:39.99,old:49.99,icon:"lidar.jpg",badge:"s",rating:4.6,reviews:89,stock:false},
  {id:7,name:"L298N Motor Driver",cat:"Driver Board",price:4.99,old:null,icon:"./l298n.jpg",badge:"h",rating:4.7,reviews:671,stock:true},
  {id:8,name:"4WD Robot Chassis Kit",cat:"Chassis & Frame",price:16.99,old:24.99,icon:"./chassis.jpg",badge:"s",rating:4.8,reviews:302,stock:true},
  {id:9,name:"MPU-6050 IMU 6-Axis",cat:"Motion Sensor",price:3.49,old:null,icon:"./mpu.jpg",badge:"n",rating:4.9,reviews:843,stock:true},
];
const projects=[
  {id:1,title:"Bank Lock",desc:"In this security-themed project, a keypad is used to input a numerical code to unlock a bank vault simulation. The Arduino controls a servo motor to physically lock or unlock the vault door based on the entered code. A buzzer provides audio feedback for correct or incorrect attempts, adding an extra layer of interactivity to the security system.",tags:["Arduino uno","Keypad","servo motor","Buzzer"],diff:"h",icon:"./mnl.png",views:8420,likes:1240,feat:true},
  {id:2,title:"Dino Game",desc:"Inspired by the popular Dino game found in Google Chrome, this project involves an Arduino Nano that controls the gameplay. The LCD I2C displays the game graphics, while a buzzer provides sound effects. Players interact through a button to make the Dino jump over obstacles, aiming to achieve the highest score possible.",tags:["Arduino nano","buzzer","button","LCD I2C"],diff:"e",icon:"./dino.png",views:14200,likes:3400,feat:false},
  {id:3,title:"Timer",desc:"This timer project leverages the ESP32 microcontroller to offer advanced functionality. The segment display shows the countdown timer, which can be adjusted via user inputs. The ESP32 enables more complex features such as remote control through a smartphone app, enhancing the timer's versatility.",tags:["ESP32","Segment Display"],diff:"h",icon:"./timer.png",views:6830,likes:920,feat:false},
  {id:4,title:"Radar",desc:"This project involves creating a radar system that utilizes ultrasonic sensors to detect distance. The Arduino Uno processes the sensor data and drives a servo motor to sweep the sensor across a designated area. The measured distances are displayed on an LCD screen, providing real-time feedback on the detected objects in the vicinity.",tags:["Arduino","HC-SR04","servo motor","LCD I2C"],diff:"e",icon:"./radar.png",views:11500,likes:2800,feat:false},
  {id:5,title:"Menory Game",desc:"In this engaging memory game, players must replicate a sequence of LED lights activated in a specified order. The setup uses an Arduino Uno to control the LEDs, buttons, and an LCD with I2C for displaying instructions. A buzzer adds audio cues, enhancing the gameplay experience as players challenge their memory skills and try to advance through levels.",tags:["Arduino Uno","buttons","Buzzer","LEDS"],diff:"m",icon:"./memory game.jpg",views:4200,likes:780,feat:false},
];
const wirings=[
  {id:"hcsr04",name:"HC-SR04 Ultrasonic",sub:"Distance Sensor",icon:"📡",desc:"Measure distances from 2cm to 400cm with ±3mm accuracy. Essential for obstacle avoidance.",
   pins:[{p:"VCC",w:"5V",c:"#ef4444",to:"Arduino 5V"},{p:"GND",w:"GND",c:"#374151",to:"Arduino GND"},{p:"TRIG",w:"Digital",c:"#00e5ff",to:"Arduino D9"},{p:"ECHO",w:"Digital",c:"#a855f7",to:"Arduino D10"}],
   code:`<span class="cm">// HC-SR04 Ultrasonic Sensor</span>\n<span class="kw">const int</span> trigPin = <span class="num">9</span>;\n<span class="kw">const int</span> echoPin = <span class="num">10</span>;\n\n<span class="kw">void</span> <span class="fn">setup</span>() {\n  <span class="fn">Serial.begin</span>(<span class="num">9600</span>);\n  <span class="fn">pinMode</span>(trigPin, OUTPUT);\n  <span class="fn">pinMode</span>(echoPin, INPUT);\n}\n\n<span class="kw">void</span> <span class="fn">loop</span>() {\n  <span class="fn">digitalWrite</span>(trigPin, LOW);\n  <span class="fn">delayMicroseconds</span>(<span class="num">2</span>);\n  <span class="fn">digitalWrite</span>(trigPin, HIGH);\n  <span class="fn">delayMicroseconds</span>(<span class="num">10</span>);\n  <span class="fn">digitalWrite</span>(trigPin, LOW);\n  <span class="kw">long</span> dur = <span class="fn">pulseIn</span>(echoPin, HIGH);\n  <span class="kw">float</span> dist = dur * <span class="num">0.034</span> / <span class="num">2</span>;\n  <span class="fn">Serial.print</span>(<span class="str">"Distance: "</span>);\n  <span class="fn">Serial.println</span>(dist);\n  <span class="fn">delay</span>(<span class="num">500</span>);\n}`},
  {id:"mpu6050",name:"MPU-6050 IMU",sub:"6-Axis Gyro + Accel",icon:"🌀",desc:"Read 3-axis gyroscope and 3-axis accelerometer over I2C for orientation tracking.",
   pins:[{p:"VCC",w:"3.3V",c:"#ef4444",to:"Arduino 3.3V"},{p:"GND",w:"GND",c:"#374151",to:"Arduino GND"},{p:"SCL",w:"I2C Clock",c:"#00e5ff",to:"Arduino A5"},{p:"SDA",w:"I2C Data",c:"#a855f7",to:"Arduino A4"}],
   code:`<span class="cm">// MPU-6050 with Wire library</span>\n<span class="kw">#include</span> <span class="str">&lt;Wire.h&gt;</span>\n<span class="kw">#include</span> <span class="str">&lt;MPU6050.h&gt;</span>\nMPU6050 mpu;\n\n<span class="kw">void</span> <span class="fn">setup</span>() {\n  <span class="fn">Serial.begin</span>(<span class="num">115200</span>);\n  <span class="fn">Wire.begin</span>();\n  mpu.<span class="fn">initialize</span>();\n}\n\n<span class="kw">void</span> <span class="fn">loop</span>() {\n  <span class="kw">int16_t</span> ax, ay, az, gx, gy, gz;\n  mpu.<span class="fn">getMotion6</span>(&amp;ax,&amp;ay,&amp;az,&amp;gx,&amp;gy,&amp;gz);\n  <span class="fn">Serial.printf</span>(<span class="str">"Accel: %d %d %d\\n"</span>, ax, ay, az);\n  <span class="fn">delay</span>(<span class="num">100</span>);\n}`},
  {id:"l298n",name:"L298N Motor Driver",sub:"Dual H-Bridge",icon:"🟦",desc:"Control 2 DC motors independently — direction and speed via PWM. Handles up to 2A per channel.",
   pins:[{p:"ENA",w:"PWM",c:"#00e5ff",to:"Arduino D6 (PWM)"},{p:"IN1",w:"Digital",c:"#00ffa3",to:"Arduino D7"},{p:"IN2",w:"Digital",c:"#7c3aed",to:"Arduino D8"},{p:"VCC",w:"Motor Power",c:"#ef4444",to:"Battery+ (7-12V)"},{p:"GND",w:"GND",c:"#374151",to:"Arduino GND"}],
   code:`<span class="cm">// L298N Dual Motor Control</span>\n<span class="kw">const int</span> ENA=<span class="num">6</span>,IN1=<span class="num">7</span>,IN2=<span class="num">8</span>;\n\n<span class="kw">void</span> <span class="fn">motorA</span>(<span class="kw">int</span> speed, <span class="kw">bool</span> fwd) {\n  <span class="fn">digitalWrite</span>(IN1, fwd);\n  <span class="fn">digitalWrite</span>(IN2, !fwd);\n  <span class="fn">analogWrite</span>(ENA, speed);\n}\n\n<span class="kw">void</span> <span class="fn">setup</span>() {\n  <span class="fn">pinMode</span>(ENA,OUTPUT);\n  <span class="fn">pinMode</span>(IN1,OUTPUT);\n  <span class="fn">pinMode</span>(IN2,OUTPUT);\n}\n\n<span class="kw">void</span> <span class="fn">loop</span>() {\n  <span class="fn">motorA</span>(<span class="num">200</span>, <span class="kw">true</span>);  <span class="cm">// Forward 78%</span>\n  <span class="fn">delay</span>(<span class="num">2000</span>);\n  <span class="fn">motorA</span>(<span class="num">150</span>, <span class="kw">false</span>); <span class="cm">// Reverse 59%</span>\n  <span class="fn">delay</span>(<span class="num">2000</span>);\n}`},
  {id:"sg90",name:"SG90 Servo Motor",sub:"180° Micro Servo",icon:"⚙️",desc:"Precise angle control from 0° to 180° using PWM. Lightweight and perfect for small robotic arms.",
   pins:[{p:"Signal",w:"PWM",c:"#a855f7",to:"Arduino D9 (PWM)"},{p:"VCC",w:"5V",c:"#ef4444",to:"Arduino 5V"},{p:"GND",w:"GND",c:"#374151",to:"Arduino GND"}],
   code:`<span class="cm">// SG90 Servo Control</span>\n<span class="kw">#include</span> <span class="str">&lt;Servo.h&gt;</span>\nServo myServo;\n\n<span class="kw">void</span> <span class="fn">setup</span>() {\n  myServo.<span class="fn">attach</span>(<span class="num">9</span>);\n}\n\n<span class="kw">void</span> <span class="fn">loop</span>() {\n  <span class="cm">// Sweep 0° to 180°</span>\n  <span class="kw">for</span>(<span class="kw">int</span> a=<span class="num">0</span>;a&lt;=<span class="num">180</span>;a+=<span class="num">5</span>){\n    myServo.<span class="fn">write</span>(a);\n    <span class="fn">delay</span>(<span class="num">15</span>);\n  }\n  <span class="cm">// Sweep 180° to 0°</span>\n  <span class="kw">for</span>(<span class="kw">int</span> a=<span class="num">180</span>;a&gt;=<span class="num">0</span>;a-=<span class="num">5</span>){\n    myServo.<span class="fn">write</span>(a);\n    <span class="fn">delay</span>(<span class="num">15</span>);\n  }\n}`},
];

/* RENDER TUTORIALS */
const lvMap={b:{l:"Beginner",c:"lb"},i:{l:"Intermediate",c:"li"},a:{l:"Advanced",c:"la"}};
function renderTuts(f='all'){
  const d=f==='all'?tutorials:tutorials.filter(t=>t.cat===f);
  document.getElementById('tgrid').innerHTML=d.map(t=>{
    const lv=lvMap[t.lvl];
    return`<div class="tcard"><div class="tthumb"><div class="tthumb-bg">${t.id%2?'🤖':'⚡'}</div><div class="tplay">▶</div><span class="tlvl ${lv.c}">${lv.l}</span><span class="tdur">⏱ ${t.dur}</span></div><div class="tbody"><div class="ttags">${t.tags.map(x=>`<span class="ttag">${x}</span>`).join('')}</div><h3 class="tname">${t.title}</h3><p class="tdesc">${t.desc}</p><div class="tfoot"><div class="tauthor"><div class="tav">${t.ini}</div>${t.inst}</div><div style="display:flex;gap:12px"><span>👥${t.students.toLocaleString()}</span><span>📖${t.lessons}</span></div></div></div></div>`;
  }).join('');
}
function filterTuts(btn,cat){
  document.querySelectorAll('#tab-tutorials .fchip').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');renderTuts(cat);
}

/* RENDER SHOP */
const bmap={n:{l:"New",c:"bn"},s:{l:"Sale",c:"bs"},h:{l:"Hot",c:"bh"}};
function renderShop(){
  document.getElementById('sgrid').innerHTML=products.map(p=>{
    const b=bmap[p.badge];
    return`<div class="pcard"><div class="pbadge ${b.c}">${b.l}</div><div class="pimg"><img src="${p.icon}" /><div class="pquick"><button class="qbtn">♡</button><button class="qbtn">👁</button><button class="qbtn add" onclick="addCart(${p.id})" ${!p.stock?'disabled':''}>+ Add</button></div></div><div class="pbody"><div class="pcat">${p.cat}</div><div class="pname">${p.name}</div><div class="prating"><span class="stars">${'★'.repeat(Math.floor(p.rating))}</span>${p.rating}(${p.reviews})</div><div class="ppr"><div><span class="pprice">$${p.price.toFixed(2)}</span>${p.old?`<span class="pold"> $${p.old.toFixed(2)}</span>`:''}</div><button class="addbtn" onclick="addCart(${p.id})" ${!p.stock?'disabled':''}>${p.stock?'Add':'Sold Out'}</button></div></div></div>`;
  }).join('');
}

/* RENDER PROJECTS */
const dmap={e:{l:"Easy",c:"de"},m:{l:"Medium",c:"dm"},h:{l:"Hard",c:"dh"}};
function renderProjects(){
  document.getElementById('pgrid').innerHTML=projects.map(p=>{
    const df=dmap[p.diff];
    return`<div class="prcard ${p.feat?'feat':''}"><div class="prthumb"><img class="prt-logo" src="${p.icon}" /><span class="pdiff ${df.c}">${df.l}</span></div><div class="prbody"><div class="prtags">${p.tags.map(t=>`<span class="prtag">${t}</span>`).join('')}</div><h3 class="prname">${p.title}</h3><p class="prdesc">${p.desc}</p><div class="prfoot"><div class="prstats"><span>👁${p.views.toLocaleString()}</span><span>❤️${p.likes.toLocaleString()}</span></div><button class="viewbtn">View Guide →</button></div></div></div>`;
  }).join('');
}

/* WIRING */
let activeW='hcsr04';
function renderWList(){
  document.getElementById('wlist').innerHTML=`<div class="wlist-hdr">⚡ Components</div>`+wirings.map(w=>`<div class="witem ${w.id===activeW?'active':''}" onclick="selW('${w.id}')"><div class="wi-ic">${w.icon}</div><div><div class="wi-n">${w.name}</div><div class="wi-s">${w.sub}</div></div></div>`).join('');
}
function renderWPanel(){
  const w=wirings.find(x=>x.id===activeW);
  const n=w.pins.length;
  const pinsFrom=w.pins.map((p,i)=>{const y=70+(i*(80/Math.max(n-1,1)));const sy=Math.max(70,Math.min(y,130));return`<circle cx="168" cy="${sy}" r="4.5" fill="${p.c}"/>`;}).join('');
  const pinsTo=w.pins.map((p,i)=>{const y=50+(i*(110/Math.max(n-1,1)));const sy=Math.max(50,Math.min(y,150));return`<circle cx="350" cy="${sy}" r="4.5" fill="${p.c}"/>`;}).join('');
  const wires=w.pins.map((p,i)=>{const fy=70+(i*(80/Math.max(n-1,1)));const ty=50+(i*(110/Math.max(n-1,1)));const sfy=Math.max(70,Math.min(fy,130));const sty=Math.max(50,Math.min(ty,150));return`<path d="M168 ${sfy} C260 ${sfy} 260 ${sty} 350 ${sty}" stroke="${p.c}" stroke-width="2" stroke-dasharray="5 3" opacity=".75"/>`;}).join('');
  document.getElementById('wpanel').innerHTML=`<div class="wpanel"><div class="wp-hdr"><div class="wp-ic">${w.icon}</div><div><div class="wp-t">${w.name}</div><div class="wp-m"><span>📌${w.pins.length} pins</span><span>🔌${w.sub}</span></div></div></div><p style="font-size:.85rem;color:var(--muted);margin-bottom:1.4rem;line-height:1.7">${w.desc}</p><div class="wdiagram"><div class="dgrid"></div><svg class="dsvg" viewBox="0 0 500 190" fill="none"><rect x="28" y="55" width="140" height="82" rx="10" fill="#0d1520" stroke="rgba(0,229,255,.3)" stroke-width="1.5"/><text x="98" y="89" font-family="JetBrains Mono" font-size="18" text-anchor="middle">${w.icon}</text><text x="98" y="110" font-family="JetBrains Mono" font-size="8.5" fill="#5a7a99" text-anchor="middle">${w.name.split(' ')[0]}</text>${pinsFrom}<rect x="350" y="28" width="130" height="136" rx="10" fill="#0d1520" stroke="rgba(168,85,247,.3)" stroke-width="1.5"/><text x="415" y="60" font-family="JetBrains Mono" font-size="8.5" fill="#a855f7" text-anchor="middle">ARDUINO</text>${pinsTo}${wires}</svg></div><table class="pin-table"><thead><tr><th>Pin</th><th>Wire</th><th>Connect To</th></tr></thead><tbody>${w.pins.map(p=>`<tr><td><span class="pcode">${p.p}</span></td><td><span class="pwire"><span class="wdot" style="background:${p.c}"></span>${p.w}</span></td><td style="color:var(--muted)">${p.to}</td></tr>`).join('')}</tbody></table><div class="cblock"><div class="chdr"><div class="cdots"><div class="cdot2" style="background:#ff5f56"></div><div class="cdot2" style="background:#ffbd2e"></div><div class="cdot2" style="background:#27c93f"></div></div><span class="clang">Arduino C++</span><button class="copybtn" onclick="copyCode(this)">Copy</button></div><pre class="cbody">${w.code}</pre></div></div>`;
}
function selW(id){activeW=id;renderWList();renderWPanel();}
function copyCode(btn){btn.textContent='Copied!';setTimeout(()=>btn.textContent='Copy',2000);}

/* TABS */
function switchTab(name){
  document.querySelectorAll('.stab').forEach(b=>b.classList.toggle('active',b.dataset.tab===name));
  document.querySelectorAll('.tab-content').forEach(c=>c.classList.toggle('active',c.id===`tab-${name}`));
  if(name==='wiring'){renderWList();renderWPanel();}
  setTimeout(()=>document.getElementById('platform').scrollIntoView({behavior:'smooth'}),50);
}

/* CART */
let cart=[];
function addCart(id){
  const p=products.find(x=>x.id===id);if(!p||!p.stock)return;
  const ex=cart.find(x=>x.id===id);if(ex)ex.qty++;else cart.push({...p,qty:1});
  updCart();showToast(`✅ "${p.name}" added to cart`);
}
function remCart(id){cart=cart.filter(x=>x.id!==id);updCart();}
function updCart(){
  const cnt=cart.reduce((s,c)=>s+c.qty,0),tot=cart.reduce((s,c)=>s+c.price*c.qty,0);
  document.getElementById('cc').textContent=cnt;
  const bd=document.getElementById('dbody'),ft=document.getElementById('dftr');
  if(!cart.length){bd.innerHTML=`<div class="empty-state"><span class="eic">🛒</span><p>Your cart is empty</p><p style="font-size:.78rem;margin-top:.4rem">Add some components!</p></div>`;ft.style.display='none';}
  else{bd.innerHTML=cart.map(c=>`<div class="ditem"><div class="diic">${c.icon}</div><div class="dii"><div class="din">${c.name}</div><div class="dip">$${(c.price*c.qty).toFixed(2)} × ${c.qty}</div></div><button class="dirm" onclick="remCart(${c.id})">✕</button></div>`).join('');ft.style.display='block';document.getElementById('ctotal').textContent=`$${tot.toFixed(2)}`;}
}
function openDrawer(){document.getElementById('dbg').classList.add('open');document.getElementById('drawer').classList.add('open');}
function closeDrawer(){document.getElementById('dbg').classList.remove('open');document.getElementById('drawer').classList.remove('open');}

/* TOAST */
function showToast(m){const t=document.getElementById('toast');document.getElementById('tmsg').textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000);}

/* COUNTERS */

function animCounters(){document.querySelectorAll('[data-target]').forEach(el=>{const tg=+el.getAttribute('data-target');let cur=0;const inc=tg/70;const tm=setInterval(()=>{cur+=inc;if(cur>=tg){cur=tg;clearInterval(tm);}el.textContent=Math.floor(cur).toLocaleString()+(tg===97?'%':'+');},20);});}
const cObs=new IntersectionObserver(e=>{if(e[0].isIntersecting){animCounters();cObs.disconnect();}},{threshold:.4});
cObs.observe(document.querySelector('.hero-metrics'));

/* SCROLL REVEAL */
const rObs=new IntersectionObserver(entries=>entries.forEach((e,i)=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.add('visible'),i*70);}),{threshold:.08});
document.querySelectorAll('.reveal').forEach(el=>rObs.observe(el));

/* NAV SCROLL */
window.addEventListener('scroll',()=>document.getElementById('nav').classList.toggle('scrolled',scrollY>50));

/* NAV HELPER */
function goTo(target,btn){
  document.querySelectorAll('.nav-pill .nl').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  if(target==='home'){document.getElementById('home').scrollIntoView({behavior:'smooth'});}
  else{switchTab(target);}
}

/* CURSOR */
const cur=document.getElementById('cursor');
document.addEventListener('mousemove',e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';});
document.querySelectorAll('a,button,.tcard,.pcard,.prcard,.witem').forEach(el=>{
  el.addEventListener('mouseenter',()=>cur.classList.add('big'));
  el.addEventListener('mouseleave',()=>cur.classList.remove('big'));
});

/* PRICE RANGE */
document.querySelector('.price-range')?.addEventListener('input',function(){document.getElementById('prlbl').textContent='$'+this.value;});

/* INIT */
renderTuts();renderShop();renderProjects();updCart();