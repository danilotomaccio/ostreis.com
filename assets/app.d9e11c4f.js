import{d as ht,r as Zt,b as Gt,e as te,o as j,c as J,a as L,t as st,f as ee,_ as Vt,F as Xt,g as Kt,h as de,i as yt,u as Q,j as $t,k as pe,l as vt,m as ge,R as ye,n as Pe,p as Me,C as Ce,q as be,s as ke,v as Ie,w as Ae,x as we,y as Te,z as De,A as xe,B as Be,D as _e,E as Re}from"./chunks/framework.e4faba77.js";const Fe=JSON.parse('[{"frontmatter":{"title":"Antica Osteria Marconi","date":"2023-07-23T00:00:00.000Z","img":"/img/anticaosteria-pasta.jpg"},"url":"/articles/antica-osteria.html"},{"frontmatter":{"title":"Massimo Carleo","date":"2023-09-09T00:00:00.000Z","img":"/img/massimocarleo-aglio.jpeg"},"url":"/articles/massimo-carleo.html"},{"frontmatter":{"title":"Sottapera","date":"2023-06-23T00:00:00.000Z","img":"/img/sottapera-antipasto.jpeg"},"url":"/articles/sottapera.html"},{"frontmatter":{"title":"Vitantonio Lombardo","date":"2023-09-23T00:00:00.000Z","img":"/img/vitantonio-montecrusco.jpeg"},"url":"/articles/vitantonio-lombardo.html"}]');/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){return e<0?-1:e===0?0:1}function dt(e,t,r){return(1-r)*e+r*t}function Ee(e,t,r){return r<e?e:r>t?t:r}function It(e,t,r){return r<e?e:r>t?t:r}function At(e){return e=e%360,e<0&&(e=e+360),e}function Z(e){return e=e%360,e<0&&(e=e+360),e}function Oe(e,t){return Z(t-e)<=180?1:-1}function re(e,t){return 180-Math.abs(Math.abs(e-t)-180)}function Lt(e,t){const r=e[0]*t[0][0]+e[1]*t[0][1]+e[2]*t[0][2],n=e[0]*t[1][0]+e[1]*t[1][1]+e[2]*t[1][2],a=e[0]*t[2][0]+e[1]*t[2][1]+e[2]*t[2][2];return[r,n,a]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],ve=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],Ut=[95.047,100,108.883];function Tt(e,t,r){return(255<<24|(e&255)<<16|(t&255)<<8|r&255)>>>0}function Qt(e){const t=ct(e[0]),r=ct(e[1]),n=ct(e[2]);return Tt(t,r,n)}function Le(e){return e>>24&255}function Dt(e){return e>>16&255}function xt(e){return e>>8&255}function Bt(e){return e&255}function ae(e,t,r){const n=ve,a=n[0][0]*e+n[0][1]*t+n[0][2]*r,s=n[1][0]*e+n[1][1]*t+n[1][2]*r,o=n[2][0]*e+n[2][1]*t+n[2][2]*r,c=ct(a),h=ct(s),f=ct(o);return Tt(c,h,f)}function Se(e){const t=tt(Dt(e)),r=tt(xt(e)),n=tt(Bt(e));return Lt([t,r,n],ne)}function He(e,t,r){const n=Ut,a=(e+16)/116,s=t/500+a,o=a-r/200,c=kt(s),h=kt(a),f=kt(o),l=c*n[0],d=h*n[1],g=f*n[2];return ae(l,d,g)}function se(e){const t=tt(Dt(e)),r=tt(xt(e)),n=tt(Bt(e)),a=ne,s=a[0][0]*t+a[0][1]*r+a[0][2]*n,o=a[1][0]*t+a[1][1]*r+a[1][2]*n,c=a[2][0]*t+a[2][1]*r+a[2][2]*n,h=Ut,f=s/h[0],l=o/h[1],d=c/h[2],g=pt(f),m=pt(l),p=pt(d),u=116*m-16,b=500*(g-m),A=200*(m-p);return[u,b,A]}function Ne(e){const t=rt(e),r=ct(t);return Tt(r,r,r)}function St(e){const t=Se(e)[1];return 116*pt(t/100)-16}function rt(e){return 100*kt((e+16)/116)}function Ht(e){return pt(e/100)*116-16}function tt(e){const t=e/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function ct(e){const t=e/100;let r=0;return t<=.0031308?r=t*12.92:r=1.055*Math.pow(t,1/2.4)-.055,Ee(0,255,Math.round(r*255))}function ze(){return Ut}function pt(e){const t=.008856451679035631,r=24389/27;return e>t?Math.pow(e,1/3):(r*e+16)/116}function kt(e){const t=.008856451679035631,r=24389/27,n=e*e*e;return n>t?n:(116*e-16)/r}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static make(t=ze(),r=200/Math.PI*rt(50)/100,n=50,a=2,s=!1){const o=t,c=o[0]*.401288+o[1]*.650173+o[2]*-.051461,h=o[0]*-.250268+o[1]*1.204414+o[2]*.045854,f=o[0]*-.002079+o[1]*.048952+o[2]*.953127,l=.8+a/10,d=l>=.9?dt(.59,.69,(l-.9)*10):dt(.525,.59,(l-.8)*10);let g=s?1:l*(1-1/3.6*Math.exp((-r-42)/92));g=g>1?1:g<0?0:g;const m=l,p=[g*(100/c)+1-g,g*(100/h)+1-g,g*(100/f)+1-g],u=1/(5*r+1),b=u*u*u*u,A=1-b,y=b*r+.1*A*A*Math.cbrt(5*r),M=rt(n)/t[1],T=1.48+Math.sqrt(M),w=.725/Math.pow(M,.2),R=w,C=[Math.pow(y*p[0]*c/100,.42),Math.pow(y*p[1]*h/100,.42),Math.pow(y*p[2]*f/100,.42)],I=[400*C[0]/(C[0]+27.13),400*C[1]/(C[1]+27.13),400*C[2]/(C[2]+27.13)],_=(2*I[0]+I[1]+.05*I[2])*w;return new Y(M,_,w,R,d,m,p,y,Math.pow(y,.25),T)}constructor(t,r,n,a,s,o,c,h,f,l){this.n=t,this.aw=r,this.nbb=n,this.ncb=a,this.c=s,this.nc=o,this.rgbD=c,this.fl=h,this.fLRoot=f,this.z=l}}Y.DEFAULT=Y.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,r,n,a,s,o,c,h,f){this.hue=t,this.chroma=r,this.j=n,this.q=a,this.m=s,this.s=o,this.jstar=c,this.astar=h,this.bstar=f}distance(t){const r=this.jstar-t.jstar,n=this.astar-t.astar,a=this.bstar-t.bstar,s=Math.sqrt(r*r+n*n+a*a);return 1.41*Math.pow(s,.63)}static fromInt(t){return S.fromIntInViewingConditions(t,Y.DEFAULT)}static fromIntInViewingConditions(t,r){const n=(t&16711680)>>16,a=(t&65280)>>8,s=t&255,o=tt(n),c=tt(a),h=tt(s),f=.41233895*o+.35762064*c+.18051042*h,l=.2126*o+.7152*c+.0722*h,d=.01932141*o+.11916382*c+.95034478*h,g=.401288*f+.650173*l-.051461*d,m=-.250268*f+1.204414*l+.045854*d,p=-.002079*f+.048952*l+.953127*d,u=r.rgbD[0]*g,b=r.rgbD[1]*m,A=r.rgbD[2]*p,y=Math.pow(r.fl*Math.abs(u)/100,.42),M=Math.pow(r.fl*Math.abs(b)/100,.42),T=Math.pow(r.fl*Math.abs(A)/100,.42),w=$(u)*400*y/(y+27.13),R=$(b)*400*M/(M+27.13),C=$(A)*400*T/(T+27.13),I=(11*w+-12*R+C)/11,_=(w+R-2*C)/9,B=(20*w+20*R+21*C)/20,N=(40*w+20*R+C)/20,V=Math.atan2(_,I)*180/Math.PI,O=V<0?V+360:V>=360?V-360:V,it=O*Math.PI/180,Pt=N*r.nbb,et=100*Math.pow(Pt/r.aw,r.c*r.z),Mt=4/r.c*Math.sqrt(et/100)*(r.aw+4)*r.fLRoot,Rt=O<20.14?O+360:O,Ft=.25*(Math.cos(Rt*Math.PI/180+2)+3.8),Ot=5e4/13*Ft*r.nc*r.ncb*Math.sqrt(I*I+_*_)/(B+.305),Ct=Math.pow(Ot,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),Wt=Ct*Math.sqrt(et/100),Yt=Wt*r.fLRoot,he=50*Math.sqrt(Ct*r.c/(r.aw+4)),ue=(1+100*.007)*et/(1+.007*et),Jt=1/.0228*Math.log(1+.0228*Yt),fe=Jt*Math.cos(it),me=Jt*Math.sin(it);return new S(O,Wt,et,Mt,Yt,he,ue,fe,me)}static fromJch(t,r,n){return S.fromJchInViewingConditions(t,r,n,Y.DEFAULT)}static fromJchInViewingConditions(t,r,n,a){const s=4/a.c*Math.sqrt(t/100)*(a.aw+4)*a.fLRoot,o=r*a.fLRoot,c=r/Math.sqrt(t/100),h=50*Math.sqrt(c*a.c/(a.aw+4)),f=n*Math.PI/180,l=(1+100*.007)*t/(1+.007*t),d=1/.0228*Math.log(1+.0228*o),g=d*Math.cos(f),m=d*Math.sin(f);return new S(n,r,t,s,o,h,l,g,m)}static fromUcs(t,r,n){return S.fromUcsInViewingConditions(t,r,n,Y.DEFAULT)}static fromUcsInViewingConditions(t,r,n,a){const s=r,o=n,c=Math.sqrt(s*s+o*o),f=(Math.exp(c*.0228)-1)/.0228/a.fLRoot;let l=Math.atan2(o,s)*(180/Math.PI);l<0&&(l+=360);const d=t/(1-(t-100)*.007);return S.fromJchInViewingConditions(d,f,l,a)}toInt(){return this.viewed(Y.DEFAULT)}viewed(t){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),a=this.hue*Math.PI/180,s=.25*(Math.cos(a+2)+3.8),o=t.aw*Math.pow(this.j/100,1/t.c/t.z),c=s*(5e4/13)*t.nc*t.ncb,h=o/t.nbb,f=Math.sin(a),l=Math.cos(a),d=23*(h+.305)*n/(23*c+11*n*l+108*n*f),g=d*l,m=d*f,p=(460*h+451*g+288*m)/1403,u=(460*h-891*g-261*m)/1403,b=(460*h-220*g-6300*m)/1403,A=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),y=$(p)*(100/t.fl)*Math.pow(A,1/.42),M=Math.max(0,27.13*Math.abs(u)/(400-Math.abs(u))),T=$(u)*(100/t.fl)*Math.pow(M,1/.42),w=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),R=$(b)*(100/t.fl)*Math.pow(w,1/.42),C=y/t.rgbD[0],I=T/t.rgbD[1],_=R/t.rgbD[2],B=1.86206786*C-1.01125463*I+.14918677*_,N=.38752654*C+.62144744*I-.00897398*_,q=-.0158415*C-.03412294*I+1.04996444*_;return ae(B,N,q)}static fromXyzInViewingConditions(t,r,n,a){const s=.401288*t+.650173*r-.051461*n,o=-.250268*t+1.204414*r+.045854*n,c=-.002079*t+.048952*r+.953127*n,h=a.rgbD[0]*s,f=a.rgbD[1]*o,l=a.rgbD[2]*c,d=Math.pow(a.fl*Math.abs(h)/100,.42),g=Math.pow(a.fl*Math.abs(f)/100,.42),m=Math.pow(a.fl*Math.abs(l)/100,.42),p=$(h)*400*d/(d+27.13),u=$(f)*400*g/(g+27.13),b=$(l)*400*m/(m+27.13),A=(11*p+-12*u+b)/11,y=(p+u-2*b)/9,M=(20*p+20*u+21*b)/20,T=(40*p+20*u+b)/20,R=Math.atan2(y,A)*180/Math.PI,C=R<0?R+360:R>=360?R-360:R,I=C*Math.PI/180,_=T*a.nbb,B=100*Math.pow(_/a.aw,a.c*a.z),N=4/a.c*Math.sqrt(B/100)*(a.aw+4)*a.fLRoot,q=C<20.14?C+360:C,V=1/4*(Math.cos(q*Math.PI/180+2)+3.8),it=5e4/13*V*a.nc*a.ncb*Math.sqrt(A*A+y*y)/(M+.305),Pt=Math.pow(it,.9)*Math.pow(1.64-Math.pow(.29,a.n),.73),et=Pt*Math.sqrt(B/100),Mt=et*a.fLRoot,Rt=50*Math.sqrt(Pt*a.c/(a.aw+4)),Ft=(1+100*.007)*B/(1+.007*B),Et=Math.log(1+.0228*Mt)/.0228,Ot=Et*Math.cos(I),Ct=Et*Math.sin(I);return new S(C,et,B,N,Mt,Rt,Ft,Ot,Ct)}xyzInViewingConditions(t){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),a=this.hue*Math.PI/180,s=.25*(Math.cos(a+2)+3.8),o=t.aw*Math.pow(this.j/100,1/t.c/t.z),c=s*(5e4/13)*t.nc*t.ncb,h=o/t.nbb,f=Math.sin(a),l=Math.cos(a),d=23*(h+.305)*n/(23*c+11*n*l+108*n*f),g=d*l,m=d*f,p=(460*h+451*g+288*m)/1403,u=(460*h-891*g-261*m)/1403,b=(460*h-220*g-6300*m)/1403,A=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),y=$(p)*(100/t.fl)*Math.pow(A,1/.42),M=Math.max(0,27.13*Math.abs(u)/(400-Math.abs(u))),T=$(u)*(100/t.fl)*Math.pow(M,1/.42),w=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),R=$(b)*(100/t.fl)*Math.pow(w,1/.42),C=y/t.rgbD[0],I=T/t.rgbD[1],_=R/t.rgbD[2],B=1.86206786*C-1.01125463*I+.14918677*_,N=.38752654*C+.62144744*I-.00897398*_,q=-.0158415*C-.03412294*I+1.04996444*_;return[B,N,q]}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){const r=t/100;let n=0;return r<=.0031308?n=r*12.92:n=1.055*Math.pow(r,1/2.4)-.055,n*255}static chromaticAdaptation(t){const r=Math.pow(Math.abs(t),.42);return $(t)*400*r/(r+27.13)}static hueOf(t){const r=Lt(t,k.SCALED_DISCOUNT_FROM_LINRGB),n=k.chromaticAdaptation(r[0]),a=k.chromaticAdaptation(r[1]),s=k.chromaticAdaptation(r[2]),o=(11*n+-12*a+s)/11,c=(n+a-2*s)/9;return Math.atan2(c,o)}static areInCyclicOrder(t,r,n){const a=k.sanitizeRadians(r-t),s=k.sanitizeRadians(n-t);return a<s}static intercept(t,r,n){return(r-t)/(n-t)}static lerpPoint(t,r,n){return[t[0]+(n[0]-t[0])*r,t[1]+(n[1]-t[1])*r,t[2]+(n[2]-t[2])*r]}static setCoordinate(t,r,n,a){const s=k.intercept(t[a],r,n[a]);return k.lerpPoint(t,s,n)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,r){const n=k.Y_FROM_LINRGB[0],a=k.Y_FROM_LINRGB[1],s=k.Y_FROM_LINRGB[2],o=r%4<=1?0:100,c=r%2===0?0:100;if(r<4){const h=o,f=c,l=(t-h*a-f*s)/n;return k.isBounded(l)?[l,h,f]:[-1,-1,-1]}else if(r<8){const h=o,f=c,l=(t-f*n-h*s)/a;return k.isBounded(l)?[f,l,h]:[-1,-1,-1]}else{const h=o,f=c,l=(t-h*n-f*a)/s;return k.isBounded(l)?[h,f,l]:[-1,-1,-1]}}static bisectToSegment(t,r){let n=[-1,-1,-1],a=n,s=0,o=0,c=!1,h=!0;for(let f=0;f<12;f++){const l=k.nthVertex(t,f);if(l[0]<0)continue;const d=k.hueOf(l);if(!c){n=l,a=l,s=d,o=d,c=!0;continue}(h||k.areInCyclicOrder(s,d,o))&&(h=!1,k.areInCyclicOrder(s,r,d)?(a=l,o=d):(n=l,s=d))}return[n,a]}static midpoint(t,r){return[(t[0]+r[0])/2,(t[1]+r[1])/2,(t[2]+r[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,r){const n=k.bisectToSegment(t,r);let a=n[0],s=k.hueOf(a),o=n[1];for(let c=0;c<3;c++)if(a[c]!==o[c]){let h=-1,f=255;a[c]<o[c]?(h=k.criticalPlaneBelow(k.trueDelinearized(a[c])),f=k.criticalPlaneAbove(k.trueDelinearized(o[c]))):(h=k.criticalPlaneAbove(k.trueDelinearized(a[c])),f=k.criticalPlaneBelow(k.trueDelinearized(o[c])));for(let l=0;l<8&&!(Math.abs(f-h)<=1);l++){const d=Math.floor((h+f)/2),g=k.CRITICAL_PLANES[d],m=k.setCoordinate(a,g,o,c),p=k.hueOf(m);k.areInCyclicOrder(s,r,p)?(o=m,f=d):(a=m,s=p,h=d)}}return k.midpoint(a,o)}static inverseChromaticAdaptation(t){const r=Math.abs(t),n=Math.max(0,27.13*r/(400-r));return $(t)*Math.pow(n,1/.42)}static findResultByJ(t,r,n){let a=Math.sqrt(n)*11;const s=Y.DEFAULT,o=1/Math.pow(1.64-Math.pow(.29,s.n),.73),h=.25*(Math.cos(t+2)+3.8)*(5e4/13)*s.nc*s.ncb,f=Math.sin(t),l=Math.cos(t);for(let d=0;d<5;d++){const g=a/100,m=r===0||a===0?0:r/Math.sqrt(g),p=Math.pow(m*o,1/.9),b=s.aw*Math.pow(g,1/s.c/s.z)/s.nbb,A=23*(b+.305)*p/(23*h+11*p*l+108*p*f),y=A*l,M=A*f,T=(460*b+451*y+288*M)/1403,w=(460*b-891*y-261*M)/1403,R=(460*b-220*y-6300*M)/1403,C=k.inverseChromaticAdaptation(T),I=k.inverseChromaticAdaptation(w),_=k.inverseChromaticAdaptation(R),B=Lt([C,I,_],k.LINRGB_FROM_SCALED_DISCOUNT);if(B[0]<0||B[1]<0||B[2]<0)return 0;const N=k.Y_FROM_LINRGB[0],q=k.Y_FROM_LINRGB[1],V=k.Y_FROM_LINRGB[2],O=N*B[0]+q*B[1]+V*B[2];if(O<=0)return 0;if(d===4||Math.abs(O-n)<.002)return B[0]>100.01||B[1]>100.01||B[2]>100.01?0:Qt(B);a=a-(O-n)*a/(2*O)}return 0}static solveToInt(t,r,n){if(r<1e-4||n<1e-4||n>99.9999)return Ne(n);t=Z(t);const a=t/180*Math.PI,s=rt(n),o=k.findResultByJ(a,r,s);if(o!==0)return o;const c=k.bisectToLimit(s,a);return Qt(c)}static solveToCam(t,r,n){return S.fromInt(k.solveToInt(t,r,n))}}k.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];k.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];k.Y_FROM_LINRGB=[.2126,.7152,.0722];k.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static from(t,r,n){return new F(k.solveToInt(t,r,n))}static fromInt(t){return new F(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(k.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(k.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(k.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;const r=S.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=St(t),this.argb=t}setInternalState(t){const r=S.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=St(t),this.argb=t}inViewingConditions(t){const n=S.fromInt(this.toInt()).xyzInViewingConditions(t),a=S.fromXyzInViewingConditions(n[0],n[1],n[2],Y.make());return F.from(a.hue,a.chroma,Ht(n[1]))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{static harmonize(t,r){const n=F.fromInt(t),a=F.fromInt(r),s=re(n.hue,a.hue),o=Math.min(s*.5,15),c=Z(n.hue+o*Oe(n.hue,a.hue));return F.from(c,n.chroma,n.tone).toInt()}static hctHue(t,r,n){const a=qt.cam16Ucs(t,r,n),s=S.fromInt(a),o=S.fromInt(t);return F.from(s.hue,o.chroma,St(t)).toInt()}static cam16Ucs(t,r,n){const a=S.fromInt(t),s=S.fromInt(r),o=a.jstar,c=a.astar,h=a.bstar,f=s.jstar,l=s.astar,d=s.bstar,g=o+(f-o)*n,m=c+(l-c)*n,p=h+(d-h)*n;return S.fromUcs(g,m,p).toInt()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{static ratioOfTones(t,r){return t=It(0,100,t),r=It(0,100,r),v.ratioOfYs(rt(t),rt(r))}static ratioOfYs(t,r){const n=t>r?t:r,a=n===r?t:r;return(n+5)/(a+5)}static lighter(t,r){if(t<0||t>100)return-1;const n=rt(t),a=r*(n+5)-5,s=v.ratioOfYs(a,n),o=Math.abs(s-r);if(s<r&&o>.04)return-1;const c=Ht(a)+.4;return c<0||c>100?-1:c}static darker(t,r){if(t<0||t>100)return-1;const n=rt(t),a=(n+5)/r-5,s=v.ratioOfYs(n,a),o=Math.abs(s-r);if(s<r&&o>.04)return-1;const c=Ht(a)-.4;return c<0||c>100?-1:c}static lighterUnsafe(t,r){const n=v.lighter(t,r);return n<0?100:n}static darkerUnsafe(t,r){const n=v.darker(t,r);return n<0?0:n}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{static isDisliked(t){const r=Math.round(t.hue)>=90&&Math.round(t.hue)<=111,n=Math.round(t.chroma)>16,a=Math.round(t.tone)<65;return r&&n&&a}static fixIfDisliked(t){return _t.isDisliked(t)?F.from(t.hue,t.chroma,70):t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static fromPalette(t){return new P(t.name??"",t.palette,t.tone,t.isBackground??!1,t.background,t.secondBackground,t.contrastCurve,t.toneDeltaPair)}constructor(t,r,n,a,s,o,c,h){if(this.name=t,this.palette=r,this.tone=n,this.isBackground=a,this.background=s,this.secondBackground=o,this.contrastCurve=c,this.toneDeltaPair=h,this.hctCache=new Map,!s&&o)throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);if(!s&&c)throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);if(s&&!c)throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(t){return this.getHct(t).toInt()}getHct(t){const r=this.hctCache.get(t);if(r!=null)return r;const n=this.getTone(t),a=this.palette(t).getHct(n);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(t,a),a}getTone(t){const r=t.contrastLevel<0;if(this.toneDeltaPair){const n=this.toneDeltaPair(t),a=n.roleA,s=n.roleB,o=n.delta,c=n.polarity,h=n.stayTogether,l=this.background(t).getTone(t),d=c==="nearer"||c==="lighter"&&!t.isDark||c==="darker"&&t.isDark,g=d?a:s,m=d?s:a,p=this.name===g.name,u=t.isDark?1:-1,b=g.contrastCurve.getContrast(t.contrastLevel),A=m.contrastCurve.getContrast(t.contrastLevel),y=g.tone(t);let M=v.ratioOfTones(l,y)>=b?y:P.foregroundTone(l,b);const T=m.tone(t);let w=v.ratioOfTones(l,T)>=A?T:P.foregroundTone(l,A);return r&&(M=P.foregroundTone(l,b),w=P.foregroundTone(l,A)),(w-M)*u>=o||(w=It(0,100,M+o*u),(w-M)*u>=o||(M=It(0,100,w-o*u))),50<=M&&M<60?u>0?(M=60,w=Math.max(w,M+o*u)):(M=49,w=Math.min(w,M+o*u)):50<=w&&w<60&&(h?u>0?(M=60,w=Math.max(w,M+o*u)):(M=49,w=Math.min(w,M+o*u)):u>0?w=60:w=49),p?M:w}else{let n=this.tone(t);if(this.background==null)return n;const a=this.background(t).getTone(t),s=this.contrastCurve.getContrast(t.contrastLevel);if(v.ratioOfTones(a,n)>=s||(n=P.foregroundTone(a,s)),r&&(n=P.foregroundTone(a,s)),this.isBackground&&50<=n&&n<60&&(v.ratioOfTones(49,a)>=s?n=49:n=60),this.secondBackground){const[o,c]=[this.background,this.secondBackground],[h,f]=[o(t).getTone(t),c(t).getTone(t)],[l,d]=[Math.max(h,f),Math.min(h,f)];if(v.ratioOfTones(l,n)>=s&&v.ratioOfTones(d,n)>=s)return n;const g=v.lighter(l,s),m=v.darker(d,s),p=[];return g!==-1&&p.push(g),m!==-1&&p.push(m),P.tonePrefersLightForeground(h)||P.tonePrefersLightForeground(f)?g<0?100:g:p.length===1?p[0]:m<0?0:m}return n}}static foregroundTone(t,r){const n=v.lighterUnsafe(t,r),a=v.darkerUnsafe(t,r),s=v.ratioOfTones(n,t),o=v.ratioOfTones(a,t);if(P.tonePrefersLightForeground(t)){const h=Math.abs(s-o)<.1&&s<r&&o<r;return s>=r||s>=o||h?n:a}else return o>=r||o>=s?a:n}static tonePrefersLightForeground(t){return Math.round(t)<60}static toneAllowsLightForeground(t){return Math.round(t)<=49}static enableLightForeground(t){return P.tonePrefersLightForeground(t)&&!P.toneAllowsLightForeground(t)?49:t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(e){e[e.MONOCHROME=0]="MONOCHROME",e[e.NEUTRAL=1]="NEUTRAL",e[e.TONAL_SPOT=2]="TONAL_SPOT",e[e.VIBRANT=3]="VIBRANT",e[e.EXPRESSIVE=4]="EXPRESSIVE",e[e.FIDELITY=5]="FIDELITY",e[e.CONTENT=6]="CONTENT",e[e.RAINBOW=7]="RAINBOW",e[e.FRUIT_SALAD=8]="FRUIT_SALAD"})(ot||(ot={}));/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t,r,n,a){this.low=t,this.normal=r,this.medium=n,this.high=a}getContrast(t){return t<=-1?this.low:t<0?dt(this.low,this.normal,(t- -1)/1):t<.5?dt(this.normal,this.medium,(t-0)/.5):t<1?dt(this.medium,this.high,(t-.5)/.5):this.high}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,r,n,a,s){this.roleA=t,this.roleB=r,this.delta=n,this.polarity=a,this.stayTogether=s}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e){return e.variant===ot.FIDELITY||e.variant===ot.CONTENT}function E(e){return e.variant===ot.MONOCHROME}function Ge(e,t,r,n){let a=r,s=F.from(e,t,r);if(s.chroma<t){let o=s.chroma;for(;s.chroma<t;){a+=n?-1:1;const c=F.from(e,t,a);if(o>c.chroma||Math.abs(c.chroma-t)<.4)break;const h=Math.abs(c.chroma-t),f=Math.abs(s.chroma-t);h<f&&(s=c),o=Math.max(o,c.chroma)}}return a}function Ve(e){return Y.make(void 0,void 0,e.isDark?30:80,void 0,void 0)}function jt(e,t){const r=e.inViewingConditions(Ve(t));return P.tonePrefersLightForeground(e.tone)&&!P.toneAllowsLightForeground(r.tone)?P.enableLightForeground(e.tone):P.enableLightForeground(r.tone)}class i{static highestSurface(t){return t.isDark?i.surfaceBright:i.surfaceDim}}i.contentAccentToneDelta=15;i.primaryPaletteKeyColor=P.fromPalette({name:"primary_palette_key_color",palette:e=>e.primaryPalette,tone:e=>e.primaryPalette.keyColor.tone});i.secondaryPaletteKeyColor=P.fromPalette({name:"secondary_palette_key_color",palette:e=>e.secondaryPalette,tone:e=>e.secondaryPalette.keyColor.tone});i.tertiaryPaletteKeyColor=P.fromPalette({name:"tertiary_palette_key_color",palette:e=>e.tertiaryPalette,tone:e=>e.tertiaryPalette.keyColor.tone});i.neutralPaletteKeyColor=P.fromPalette({name:"neutral_palette_key_color",palette:e=>e.neutralPalette,tone:e=>e.neutralPalette.keyColor.tone});i.neutralVariantPaletteKeyColor=P.fromPalette({name:"neutral_variant_palette_key_color",palette:e=>e.neutralVariantPalette,tone:e=>e.neutralVariantPalette.keyColor.tone});i.background=P.fromPalette({name:"background",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});i.onBackground=P.fromPalette({name:"on_background",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>i.background,contrastCurve:new D(3,3,4.5,7)});i.surface=P.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});i.surfaceDim=P.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:87,isBackground:!0});i.surfaceBright=P.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?24:98,isBackground:!0});i.surfaceContainerLowest=P.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?4:100,isBackground:!0});i.surfaceContainerLow=P.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.isDark?10:96,isBackground:!0});i.surfaceContainer=P.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.isDark?12:94,isBackground:!0});i.surfaceContainerHigh=P.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.isDark?17:92,isBackground:!0});i.surfaceContainerHighest=P.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?22:90,isBackground:!0});i.onSurface=P.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>i.highestSurface(e),contrastCurve:new D(4.5,7,11,21)});i.surfaceVariant=P.fromPalette({name:"surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:90,isBackground:!0});i.onSurfaceVariant=P.fromPalette({name:"on_surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?80:30,background:e=>i.highestSurface(e),contrastCurve:new D(3,4.5,7,11)});i.inverseSurface=P.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:20});i.inverseOnSurface=P.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?20:95,background:e=>i.inverseSurface,contrastCurve:new D(4.5,7,11,21)});i.outline=P.fromPalette({name:"outline",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?60:50,background:e=>i.highestSurface(e),contrastCurve:new D(1.5,3,4.5,7)});i.outlineVariant=P.fromPalette({name:"outline_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:80,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,7)});i.shadow=P.fromPalette({name:"shadow",palette:e=>e.neutralPalette,tone:e=>0});i.scrim=P.fromPalette({name:"scrim",palette:e=>e.neutralPalette,tone:e=>0});i.surfaceTint=P.fromPalette({name:"surface_tint",palette:e=>e.primaryPalette,tone:e=>e.isDark?80:40,isBackground:!0});i.primary=P.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>E(e)?e.isDark?100:0:e.isDark?80:40,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(3,4.5,7,11),toneDeltaPair:e=>new U(i.primaryContainer,i.primary,15,"nearer",!1)});i.onPrimary=P.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,tone:e=>E(e)?e.isDark?10:90:e.isDark?20:100,background:e=>i.primary,contrastCurve:new D(4.5,7,11,21)});i.primaryContainer=P.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>ft(e)?jt(e.sourceColorHct,e):E(e)?e.isDark?85:25:e.isDark?30:90,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,7),toneDeltaPair:e=>new U(i.primaryContainer,i.primary,15,"nearer",!1)});i.onPrimaryContainer=P.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,tone:e=>ft(e)?P.foregroundTone(i.primaryContainer.tone(e),4.5):E(e)?e.isDark?0:100:e.isDark?90:10,background:e=>i.primaryContainer,contrastCurve:new D(4.5,7,11,21)});i.inversePrimary=P.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>e.isDark?40:80,background:e=>i.inverseSurface,contrastCurve:new D(3,4.5,7,11)});i.secondary=P.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(3,4.5,7,11),toneDeltaPair:e=>new U(i.secondaryContainer,i.secondary,15,"nearer",!1)});i.onSecondary=P.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,tone:e=>E(e)?e.isDark?10:100:e.isDark?20:100,background:e=>i.secondary,contrastCurve:new D(4.5,7,11,21)});i.secondaryContainer=P.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone:e=>{const t=e.isDark?30:90;if(E(e))return e.isDark?30:85;if(!ft(e))return t;let r=Ge(e.secondaryPalette.hue,e.secondaryPalette.chroma,t,!e.isDark);return r=jt(e.secondaryPalette.getHct(r),e),r},isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,7),toneDeltaPair:e=>new U(i.secondaryContainer,i.secondary,15,"nearer",!1)});i.onSecondaryContainer=P.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,tone:e=>ft(e)?P.foregroundTone(i.secondaryContainer.tone(e),4.5):e.isDark?90:10,background:e=>i.secondaryContainer,contrastCurve:new D(4.5,7,11,21)});i.tertiary=P.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>E(e)?e.isDark?90:25:e.isDark?80:40,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(3,4.5,7,11),toneDeltaPair:e=>new U(i.tertiaryContainer,i.tertiary,15,"nearer",!1)});i.onTertiary=P.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,tone:e=>E(e)?e.isDark?10:90:e.isDark?20:100,background:e=>i.tertiary,contrastCurve:new D(4.5,7,11,21)});i.tertiaryContainer=P.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>{if(E(e))return e.isDark?60:49;if(!ft(e))return e.isDark?30:90;const t=jt(e.tertiaryPalette.getHct(e.sourceColorHct.tone),e),r=e.tertiaryPalette.getHct(t);return _t.fixIfDisliked(r).tone},isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,7),toneDeltaPair:e=>new U(i.tertiaryContainer,i.tertiary,15,"nearer",!1)});i.onTertiaryContainer=P.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>E(e)?e.isDark?0:100:ft(e)?P.foregroundTone(i.tertiaryContainer.tone(e),4.5):e.isDark?90:10,background:e=>i.tertiaryContainer,contrastCurve:new D(4.5,7,11,21)});i.error=P.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(3,4.5,7,11),toneDeltaPair:e=>new U(i.errorContainer,i.error,15,"nearer",!1)});i.onError=P.fromPalette({name:"on_error",palette:e=>e.errorPalette,tone:e=>e.isDark?20:100,background:e=>i.error,contrastCurve:new D(4.5,7,11,21)});i.errorContainer=P.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?30:90,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,7),toneDeltaPair:e=>new U(i.errorContainer,i.error,15,"nearer",!1)});i.onErrorContainer=P.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?90:10,background:e=>i.errorContainer,contrastCurve:new D(4.5,7,11,21)});i.primaryFixed=P.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>E(e)?40:90,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,7),toneDeltaPair:e=>new U(i.primaryFixed,i.primaryFixedDim,10,"lighter",!0)});i.primaryFixedDim=P.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>E(e)?30:80,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,7),toneDeltaPair:e=>new U(i.primaryFixed,i.primaryFixedDim,10,"lighter",!0)});i.onPrimaryFixed=P.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,tone:e=>E(e)?100:10,background:e=>i.primaryFixedDim,secondBackground:e=>i.primaryFixed,contrastCurve:new D(4.5,7,11,21)});i.onPrimaryFixedVariant=P.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,tone:e=>E(e)?90:30,background:e=>i.primaryFixedDim,secondBackground:e=>i.primaryFixed,contrastCurve:new D(3,4.5,7,11)});i.secondaryFixed=P.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>E(e)?80:90,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,7),toneDeltaPair:e=>new U(i.secondaryFixed,i.secondaryFixedDim,10,"lighter",!0)});i.secondaryFixedDim=P.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>E(e)?70:80,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,7),toneDeltaPair:e=>new U(i.secondaryFixed,i.secondaryFixedDim,10,"lighter",!0)});i.onSecondaryFixed=P.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>10,background:e=>i.secondaryFixedDim,secondBackground:e=>i.secondaryFixed,contrastCurve:new D(4.5,7,11,21)});i.onSecondaryFixedVariant=P.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,tone:e=>E(e)?25:30,background:e=>i.secondaryFixedDim,secondBackground:e=>i.secondaryFixed,contrastCurve:new D(3,4.5,7,11)});i.tertiaryFixed=P.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>E(e)?40:90,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,7),toneDeltaPair:e=>new U(i.tertiaryFixed,i.tertiaryFixedDim,10,"lighter",!0)});i.tertiaryFixedDim=P.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>E(e)?30:80,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,7),toneDeltaPair:e=>new U(i.tertiaryFixed,i.tertiaryFixedDim,10,"lighter",!0)});i.onTertiaryFixed=P.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>E(e)?100:10,background:e=>i.tertiaryFixedDim,secondBackground:e=>i.tertiaryFixed,contrastCurve:new D(4.5,7,11,21)});i.onTertiaryFixedVariant=P.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,tone:e=>E(e)?90:30,background:e=>i.tertiaryFixedDim,secondBackground:e=>i.tertiaryFixed,contrastCurve:new D(3,4.5,7,11)});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static fromInt(t){const r=F.fromInt(t);return x.fromHct(r)}static fromHct(t){return new x(t.hue,t.chroma,t)}static fromHueAndChroma(t,r){return new x(t,r,x.createKeyColor(t,r))}constructor(t,r,n){this.hue=t,this.chroma=r,this.keyColor=n,this.cache=new Map}static createKeyColor(t,r){let a=F.from(t,r,50),s=Math.abs(a.chroma-r);for(let o=1;o<50;o+=1){if(Math.round(r)===Math.round(a.chroma))return a;const c=F.from(t,r,50+o),h=Math.abs(c.chroma-r);h<s&&(s=h,a=c);const f=F.from(t,r,50-o),l=Math.abs(f.chroma-r);l<s&&(s=l,a=f)}return a}tone(t){let r=this.cache.get(t);return r===void 0&&(r=F.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,r)),r}getHct(t){return F.fromInt(this.tone(t))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{static of(t){return new H(t,!1)}static contentOf(t){return new H(t,!0)}static fromColors(t){return H.createPaletteFromColors(!1,t)}static contentFromColors(t){return H.createPaletteFromColors(!0,t)}static createPaletteFromColors(t,r){const n=new H(r.primary,t);if(r.secondary){const a=new H(r.secondary,t);n.a2=a.a1}if(r.tertiary){const a=new H(r.tertiary,t);n.a3=a.a1}if(r.error){const a=new H(r.error,t);n.error=a.a1}if(r.neutral){const a=new H(r.neutral,t);n.n1=a.n1}if(r.neutralVariant){const a=new H(r.neutralVariant,t);n.n2=a.n2}return n}constructor(t,r){const n=F.fromInt(t),a=n.hue,s=n.chroma;r?(this.a1=x.fromHueAndChroma(a,s),this.a2=x.fromHueAndChroma(a,s/3),this.a3=x.fromHueAndChroma(a+60,s/2),this.n1=x.fromHueAndChroma(a,Math.min(s/12,4)),this.n2=x.fromHueAndChroma(a,Math.min(s/6,8))):(this.a1=x.fromHueAndChroma(a,Math.max(48,s)),this.a2=x.fromHueAndChroma(a,16),this.a3=x.fromHueAndChroma(a+60,24),this.n1=x.fromHueAndChroma(a,4),this.n2=x.fromHueAndChroma(a,8)),this.error=x.fromHueAndChroma(25,84)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{fromInt(t){return se(t)}toInt(t){return He(t[0],t[1],t[2])}distance(t,r){const n=t[0]-r[0],a=t[1]-r[1],s=t[2]-r[2];return n*n+a*a+s*s}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue=10,qe=3;class je{static quantize(t,r,n){const a=new Map,s=new Array,o=new Array,c=new $e;let h=0;for(let y=0;y<t.length;y++){const M=t[y],T=a.get(M);T===void 0?(h++,s.push(c.fromInt(M)),o.push(M),a.set(M,1)):a.set(M,T+1)}const f=new Array;for(let y=0;y<h;y++){const M=o[y],T=a.get(M);T!==void 0&&(f[y]=T)}let l=Math.min(n,h);r.length>0&&(l=Math.min(l,r.length));const d=new Array;for(let y=0;y<r.length;y++)d.push(c.fromInt(r[y]));const g=l-d.length;if(r.length===0&&g>0)for(let y=0;y<g;y++){const M=Math.random()*100,T=Math.random()*(100- -100+1)+-100,w=Math.random()*(100- -100+1)+-100;d.push(new Array(M,T,w))}const m=new Array;for(let y=0;y<h;y++)m.push(Math.floor(Math.random()*l));const p=new Array;for(let y=0;y<l;y++){p.push(new Array);for(let M=0;M<l;M++)p[y].push(0)}const u=new Array;for(let y=0;y<l;y++){u.push(new Array);for(let M=0;M<l;M++)u[y].push(new We)}const b=new Array;for(let y=0;y<l;y++)b.push(0);for(let y=0;y<Ue;y++){for(let C=0;C<l;C++){for(let I=C+1;I<l;I++){const _=c.distance(d[C],d[I]);u[I][C].distance=_,u[I][C].index=C,u[C][I].distance=_,u[C][I].index=I}u[C].sort();for(let I=0;I<l;I++)p[C][I]=u[C][I].index}let M=0;for(let C=0;C<h;C++){const I=s[C],_=m[C],B=d[_],N=c.distance(I,B);let q=N,V=-1;for(let O=0;O<l;O++){if(u[_][O].distance>=4*N)continue;const it=c.distance(I,d[O]);it<q&&(q=it,V=O)}V!==-1&&Math.abs(Math.sqrt(q)-Math.sqrt(N))>qe&&(M++,m[C]=V)}if(M===0&&y!==0)break;const T=new Array(l).fill(0),w=new Array(l).fill(0),R=new Array(l).fill(0);for(let C=0;C<l;C++)b[C]=0;for(let C=0;C<h;C++){const I=m[C],_=s[C],B=f[C];b[I]+=B,T[I]+=_[0]*B,w[I]+=_[1]*B,R[I]+=_[2]*B}for(let C=0;C<l;C++){const I=b[C];if(I===0){d[C]=[0,0,0];continue}const _=T[C]/I,B=w[C]/I,N=R[C]/I;d[C]=[_,B,N]}}const A=new Map;for(let y=0;y<l;y++){const M=b[y];if(M===0)continue;const T=c.toInt(d[y]);A.has(T)||A.set(T,M)}return A}}class We{constructor(){this.distance=-1,this.index=-1}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{static quantize(t){const r=new Map;for(let n=0;n<t.length;n++){const a=t[n];Le(a)<255||r.set(a,(r.get(a)??0)+1)}return r}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=5,W=33,mt=35937,z={RED:"red",GREEN:"green",BLUE:"blue"};class Je{constructor(t=[],r=[],n=[],a=[],s=[],o=[]){this.weights=t,this.momentsR=r,this.momentsG=n,this.momentsB=a,this.moments=s,this.cubes=o}quantize(t,r){this.constructHistogram(t),this.computeMoments();const n=this.createBoxes(r);return this.createResult(n.resultCount)}constructHistogram(t){this.weights=Array.from({length:mt}).fill(0),this.momentsR=Array.from({length:mt}).fill(0),this.momentsG=Array.from({length:mt}).fill(0),this.momentsB=Array.from({length:mt}).fill(0),this.moments=Array.from({length:mt}).fill(0);const r=Ye.quantize(t);for(const[n,a]of r.entries()){const s=Dt(n),o=xt(n),c=Bt(n),h=8-bt,f=(s>>h)+1,l=(o>>h)+1,d=(c>>h)+1,g=this.getIndex(f,l,d);this.weights[g]=(this.weights[g]??0)+a,this.momentsR[g]+=a*s,this.momentsG[g]+=a*o,this.momentsB[g]+=a*c,this.moments[g]+=a*(s*s+o*o+c*c)}}computeMoments(){for(let t=1;t<W;t++){const r=Array.from({length:W}).fill(0),n=Array.from({length:W}).fill(0),a=Array.from({length:W}).fill(0),s=Array.from({length:W}).fill(0),o=Array.from({length:W}).fill(0);for(let c=1;c<W;c++){let h=0,f=0,l=0,d=0,g=0;for(let m=1;m<W;m++){const p=this.getIndex(t,c,m);h+=this.weights[p],f+=this.momentsR[p],l+=this.momentsG[p],d+=this.momentsB[p],g+=this.moments[p],r[m]+=h,n[m]+=f,a[m]+=l,s[m]+=d,o[m]+=g;const u=this.getIndex(t-1,c,m);this.weights[p]=this.weights[u]+r[m],this.momentsR[p]=this.momentsR[u]+n[m],this.momentsG[p]=this.momentsG[u]+a[m],this.momentsB[p]=this.momentsB[u]+s[m],this.moments[p]=this.moments[u]+o[m]}}}}createBoxes(t){this.cubes=Array.from({length:t}).fill(0).map(()=>new Xe);const r=Array.from({length:t}).fill(0);this.cubes[0].r0=0,this.cubes[0].g0=0,this.cubes[0].b0=0,this.cubes[0].r1=W-1,this.cubes[0].g1=W-1,this.cubes[0].b1=W-1;let n=t,a=0;for(let s=1;s<t;s++){this.cut(this.cubes[a],this.cubes[s])?(r[a]=this.cubes[a].vol>1?this.variance(this.cubes[a]):0,r[s]=this.cubes[s].vol>1?this.variance(this.cubes[s]):0):(r[a]=0,s--),a=0;let o=r[0];for(let c=1;c<=s;c++)r[c]>o&&(o=r[c],a=c);if(o<=0){n=s+1;break}}return new Ke(t,n)}createResult(t){const r=[];for(let n=0;n<t;++n){const a=this.cubes[n],s=this.volume(a,this.weights);if(s>0){const o=Math.round(this.volume(a,this.momentsR)/s),c=Math.round(this.volume(a,this.momentsG)/s),h=Math.round(this.volume(a,this.momentsB)/s),f=255<<24|(o&255)<<16|(c&255)<<8|h&255;r.push(f)}}return r}variance(t){const r=this.volume(t,this.momentsR),n=this.volume(t,this.momentsG),a=this.volume(t,this.momentsB),s=this.moments[this.getIndex(t.r1,t.g1,t.b1)]-this.moments[this.getIndex(t.r1,t.g1,t.b0)]-this.moments[this.getIndex(t.r1,t.g0,t.b1)]+this.moments[this.getIndex(t.r1,t.g0,t.b0)]-this.moments[this.getIndex(t.r0,t.g1,t.b1)]+this.moments[this.getIndex(t.r0,t.g1,t.b0)]+this.moments[this.getIndex(t.r0,t.g0,t.b1)]-this.moments[this.getIndex(t.r0,t.g0,t.b0)],o=r*r+n*n+a*a,c=this.volume(t,this.weights);return s-o/c}cut(t,r){const n=this.volume(t,this.momentsR),a=this.volume(t,this.momentsG),s=this.volume(t,this.momentsB),o=this.volume(t,this.weights),c=this.maximize(t,z.RED,t.r0+1,t.r1,n,a,s,o),h=this.maximize(t,z.GREEN,t.g0+1,t.g1,n,a,s,o),f=this.maximize(t,z.BLUE,t.b0+1,t.b1,n,a,s,o);let l;const d=c.maximum,g=h.maximum,m=f.maximum;if(d>=g&&d>=m){if(c.cutLocation<0)return!1;l=z.RED}else g>=d&&g>=m?l=z.GREEN:l=z.BLUE;switch(r.r1=t.r1,r.g1=t.g1,r.b1=t.b1,l){case z.RED:t.r1=c.cutLocation,r.r0=t.r1,r.g0=t.g0,r.b0=t.b0;break;case z.GREEN:t.g1=h.cutLocation,r.r0=t.r0,r.g0=t.g1,r.b0=t.b0;break;case z.BLUE:t.b1=f.cutLocation,r.r0=t.r0,r.g0=t.g0,r.b0=t.b1;break;default:throw new Error("unexpected direction "+l)}return t.vol=(t.r1-t.r0)*(t.g1-t.g0)*(t.b1-t.b0),r.vol=(r.r1-r.r0)*(r.g1-r.g0)*(r.b1-r.b0),!0}maximize(t,r,n,a,s,o,c,h){const f=this.bottom(t,r,this.momentsR),l=this.bottom(t,r,this.momentsG),d=this.bottom(t,r,this.momentsB),g=this.bottom(t,r,this.weights);let m=0,p=-1,u=0,b=0,A=0,y=0;for(let M=n;M<a;M++){if(u=f+this.top(t,r,M,this.momentsR),b=l+this.top(t,r,M,this.momentsG),A=d+this.top(t,r,M,this.momentsB),y=g+this.top(t,r,M,this.weights),y===0)continue;let T=(u*u+b*b+A*A)*1,w=y*1,R=T/w;u=s-u,b=o-b,A=c-A,y=h-y,y!==0&&(T=(u*u+b*b+A*A)*1,w=y*1,R+=T/w,R>m&&(m=R,p=M))}return new Qe(p,m)}volume(t,r){return r[this.getIndex(t.r1,t.g1,t.b1)]-r[this.getIndex(t.r1,t.g1,t.b0)]-r[this.getIndex(t.r1,t.g0,t.b1)]+r[this.getIndex(t.r1,t.g0,t.b0)]-r[this.getIndex(t.r0,t.g1,t.b1)]+r[this.getIndex(t.r0,t.g1,t.b0)]+r[this.getIndex(t.r0,t.g0,t.b1)]-r[this.getIndex(t.r0,t.g0,t.b0)]}bottom(t,r,n){switch(r){case z.RED:return-n[this.getIndex(t.r0,t.g1,t.b1)]+n[this.getIndex(t.r0,t.g1,t.b0)]+n[this.getIndex(t.r0,t.g0,t.b1)]-n[this.getIndex(t.r0,t.g0,t.b0)];case z.GREEN:return-n[this.getIndex(t.r1,t.g0,t.b1)]+n[this.getIndex(t.r1,t.g0,t.b0)]+n[this.getIndex(t.r0,t.g0,t.b1)]-n[this.getIndex(t.r0,t.g0,t.b0)];case z.BLUE:return-n[this.getIndex(t.r1,t.g1,t.b0)]+n[this.getIndex(t.r1,t.g0,t.b0)]+n[this.getIndex(t.r0,t.g1,t.b0)]-n[this.getIndex(t.r0,t.g0,t.b0)];default:throw new Error("unexpected direction $direction")}}top(t,r,n,a){switch(r){case z.RED:return a[this.getIndex(n,t.g1,t.b1)]-a[this.getIndex(n,t.g1,t.b0)]-a[this.getIndex(n,t.g0,t.b1)]+a[this.getIndex(n,t.g0,t.b0)];case z.GREEN:return a[this.getIndex(t.r1,n,t.b1)]-a[this.getIndex(t.r1,n,t.b0)]-a[this.getIndex(t.r0,n,t.b1)]+a[this.getIndex(t.r0,n,t.b0)];case z.BLUE:return a[this.getIndex(t.r1,t.g1,n)]-a[this.getIndex(t.r1,t.g0,n)]-a[this.getIndex(t.r0,t.g1,n)]+a[this.getIndex(t.r0,t.g0,n)];default:throw new Error("unexpected direction $direction")}}getIndex(t,r,n){return(t<<bt*2)+(t<<bt+1)+t+(r<<bt)+r+n}}class Xe{constructor(t=0,r=0,n=0,a=0,s=0,o=0,c=0){this.r0=t,this.r1=r,this.g0=n,this.g1=a,this.b0=s,this.b1=o,this.vol=c}}class Ke{constructor(t,r){this.requestedCount=t,this.resultCount=r}}class Qe{constructor(t,r){this.cutLocation=t,this.maximum=r}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{static quantize(t,r){const a=new Je().quantize(t,r);return je.quantize(t,a,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.sourceColorArgb=t.sourceColorArgb,this.variant=t.variant,this.contrastLevel=t.contrastLevel,this.isDark=t.isDark,this.sourceColorHct=F.fromInt(t.sourceColorArgb),this.primaryPalette=t.primaryPalette,this.secondaryPalette=t.secondaryPalette,this.tertiaryPalette=t.tertiaryPalette,this.neutralPalette=t.neutralPalette,this.neutralVariantPalette=t.neutralVariantPalette,this.errorPalette=x.fromHueAndChroma(25,84)}static getRotatedHue(t,r,n){const a=t.hue;if(r.length!==n.length)throw new Error(`mismatch between hue length ${r.length} & rotations ${n.length}`);if(n.length===1)return Z(t.hue+n[0]);const s=r.length;for(let o=0;o<=s-2;o++){const c=r[o],h=r[o+1];if(c<a&&a<h)return Z(a+n[o])}return a}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(t){return K.lightFromCorePalette(H.of(t))}static dark(t){return K.darkFromCorePalette(H.of(t))}static lightContent(t){return K.lightFromCorePalette(H.contentOf(t))}static darkContent(t){return K.darkFromCorePalette(H.contentOf(t))}static lightFromCorePalette(t){return new K({primary:t.a1.tone(40),onPrimary:t.a1.tone(100),primaryContainer:t.a1.tone(90),onPrimaryContainer:t.a1.tone(10),secondary:t.a2.tone(40),onSecondary:t.a2.tone(100),secondaryContainer:t.a2.tone(90),onSecondaryContainer:t.a2.tone(10),tertiary:t.a3.tone(40),onTertiary:t.a3.tone(100),tertiaryContainer:t.a3.tone(90),onTertiaryContainer:t.a3.tone(10),error:t.error.tone(40),onError:t.error.tone(100),errorContainer:t.error.tone(90),onErrorContainer:t.error.tone(10),background:t.n1.tone(99),onBackground:t.n1.tone(10),surface:t.n1.tone(99),onSurface:t.n1.tone(10),surfaceVariant:t.n2.tone(90),onSurfaceVariant:t.n2.tone(30),outline:t.n2.tone(50),outlineVariant:t.n2.tone(80),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(20),inverseOnSurface:t.n1.tone(95),inversePrimary:t.a1.tone(80)})}static darkFromCorePalette(t){return new K({primary:t.a1.tone(80),onPrimary:t.a1.tone(20),primaryContainer:t.a1.tone(30),onPrimaryContainer:t.a1.tone(90),secondary:t.a2.tone(80),onSecondary:t.a2.tone(20),secondaryContainer:t.a2.tone(30),onSecondaryContainer:t.a2.tone(90),tertiary:t.a3.tone(80),onTertiary:t.a3.tone(20),tertiaryContainer:t.a3.tone(30),onTertiaryContainer:t.a3.tone(90),error:t.error.tone(80),onError:t.error.tone(20),errorContainer:t.error.tone(30),onErrorContainer:t.error.tone(80),background:t.n1.tone(10),onBackground:t.n1.tone(90),surface:t.n1.tone(10),onSurface:t.n1.tone(90),surfaceVariant:t.n2.tone(30),onSurfaceVariant:t.n2.tone(80),outline:t.n2.tone(60),outlineVariant:t.n2.tone(30),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(90),inverseOnSurface:t.n1.tone(20),inversePrimary:t.a1.tone(40)})}constructor(t){this.props=t}toJSON(){return{...this.props}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.input=t,this.hctsByTempCache=[],this.hctsByHueCache=[],this.tempsByHctCache=new Map,this.inputRelativeTemperatureCache=-1,this.complementCache=null}get hctsByTemp(){if(this.hctsByTempCache.length>0)return this.hctsByTempCache;const t=this.hctsByHue.concat([this.input]),r=this.tempsByHct;return t.sort((n,a)=>r.get(n)-r.get(a)),this.hctsByTempCache=t,t}get warmest(){return this.hctsByTemp[this.hctsByTemp.length-1]}get coldest(){return this.hctsByTemp[0]}analogous(t=5,r=12){const n=Math.round(this.input.hue),a=this.hctsByHue[n];let s=this.relativeTemperature(a);const o=[a];let c=0;for(let p=0;p<360;p++){const u=At(n+p),b=this.hctsByHue[u],A=this.relativeTemperature(b),y=Math.abs(A-s);s=A,c+=y}let h=1;const f=c/r;let l=0;for(s=this.relativeTemperature(a);o.length<r;){const p=At(n+h),u=this.hctsByHue[p],b=this.relativeTemperature(u),A=Math.abs(b-s);l+=A;const y=o.length*f;let M=l>=y,T=1;for(;M&&o.length<r;){o.push(u);const w=(o.length+T)*f;M=l>=w,T++}if(s=b,h++,h>360){for(;o.length<r;)o.push(u);break}}const d=[this.input],g=Math.floor((t-1)/2);for(let p=1;p<g+1;p++){let u=0-p;for(;u<0;)u=o.length+u;u>=o.length&&(u=u%o.length),d.splice(0,0,o[u])}const m=t-g-1;for(let p=1;p<m+1;p++){let u=p;for(;u<0;)u=o.length+u;u>=o.length&&(u=u%o.length),d.push(o[u])}return d}get complement(){if(this.complementCache!=null)return this.complementCache;const t=this.coldest.hue,r=this.tempsByHct.get(this.coldest),n=this.warmest.hue,s=this.tempsByHct.get(this.warmest)-r,o=gt.isBetween(this.input.hue,t,n),c=o?n:t,h=o?t:n,f=1;let l=1e3,d=this.hctsByHue[Math.round(this.input.hue)];const g=1-this.inputRelativeTemperature;for(let m=0;m<=360;m+=1){const p=Z(c+f*m);if(!gt.isBetween(p,c,h))continue;const u=this.hctsByHue[Math.round(p)],b=(this.tempsByHct.get(u)-r)/s,A=Math.abs(g-b);A<l&&(l=A,d=u)}return this.complementCache=d,this.complementCache}relativeTemperature(t){const r=this.tempsByHct.get(this.warmest)-this.tempsByHct.get(this.coldest),n=this.tempsByHct.get(t)-this.tempsByHct.get(this.coldest);return r===0?.5:n/r}get inputRelativeTemperature(){return this.inputRelativeTemperatureCache>=0?this.inputRelativeTemperatureCache:(this.inputRelativeTemperatureCache=this.relativeTemperature(this.input),this.inputRelativeTemperatureCache)}get tempsByHct(){if(this.tempsByHctCache.size>0)return this.tempsByHctCache;const t=this.hctsByHue.concat([this.input]),r=new Map;for(const n of t)r.set(n,gt.rawTemperature(n));return this.tempsByHctCache=r,r}get hctsByHue(){if(this.hctsByHueCache.length>0)return this.hctsByHueCache;const t=[];for(let r=0;r<=360;r+=1){const n=F.from(r,this.input.chroma,this.input.tone);t.push(n)}return this.hctsByHueCache=t,this.hctsByHueCache}static isBetween(t,r,n){return r<n?r<=t&&t<=n:r<=t||t<=n}static rawTemperature(t){const r=se(t.toInt()),n=Z(Math.atan2(r[2],r[1])*180/Math.PI),a=Math.sqrt(r[1]*r[1]+r[2]*r[2]);return-.5+.02*Math.pow(a,1.07)*Math.cos(Z(n-50)*Math.PI/180)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends lt{constructor(t,r,n){super({sourceColorArgb:t.toInt(),variant:ot.CONTENT,contrastLevel:n,isDark:r,primaryPalette:x.fromHueAndChroma(t.hue,t.chroma),secondaryPalette:x.fromHueAndChroma(t.hue,Math.max(t.chroma-32,t.chroma*.5)),tertiaryPalette:x.fromInt(_t.fixIfDisliked(new gt(t).analogous(3,6)[2]).toInt()),neutralPalette:x.fromHueAndChroma(t.hue,t.chroma/8),neutralVariantPalette:x.fromHueAndChroma(t.hue,t.chroma/8+4)})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends lt{constructor(t,r,n){super({sourceColorArgb:t.toInt(),variant:ot.EXPRESSIVE,contrastLevel:n,isDark:r,primaryPalette:x.fromHueAndChroma(Z(t.hue+240),40),secondaryPalette:x.fromHueAndChroma(lt.getRotatedHue(t,nt.hues,nt.secondaryRotations),24),tertiaryPalette:x.fromHueAndChroma(lt.getRotatedHue(t,nt.hues,nt.tertiaryRotations),32),neutralPalette:x.fromHueAndChroma(t.hue+15,8),neutralVariantPalette:x.fromHueAndChroma(t.hue+15,12)})}}nt.hues=[0,21,51,121,151,191,271,321,360];nt.secondaryRotations=[45,95,45,20,45,90,45,45,45];nt.tertiaryRotations=[120,120,20,45,20,15,20,120,120];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends lt{constructor(t,r,n){super({sourceColorArgb:t.toInt(),variant:ot.VIBRANT,contrastLevel:n,isDark:r,primaryPalette:x.fromHueAndChroma(t.hue,200),secondaryPalette:x.fromHueAndChroma(lt.getRotatedHue(t,at.hues,at.secondaryRotations),24),tertiaryPalette:x.fromHueAndChroma(lt.getRotatedHue(t,at.hues,at.tertiaryRotations),32),neutralPalette:x.fromHueAndChroma(t.hue,10),neutralVariantPalette:x.fromHueAndChroma(t.hue,12)})}}at.hues=[0,41,61,101,131,181,251,301,360];at.secondaryRotations=[18,15,10,12,15,18,15,12,12];at.tertiaryRotations=[35,30,20,25,30,35,30,25,25];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={desired:4,fallbackColorARGB:4282549748,filter:!0};function rr(e,t){return e.score>t.score?-1:e.score<t.score?1:0}class G{constructor(){}static score(t,r){const{desired:n,fallbackColorARGB:a,filter:s}={...er,...r},o=[],c=new Array(360).fill(0);let h=0;for(const[m,p]of t.entries()){const u=F.fromInt(m);o.push(u);const b=Math.floor(u.hue);c[b]+=p,h+=p}const f=new Array(360).fill(0);for(let m=0;m<360;m++){const p=c[m]/h;for(let u=m-14;u<m+16;u++){const b=At(u);f[b]+=p}}const l=new Array;for(const m of o){const p=At(Math.round(m.hue)),u=f[p];if(s&&(m.chroma<G.CUTOFF_CHROMA||u<=G.CUTOFF_EXCITED_PROPORTION))continue;const b=u*100*G.WEIGHT_PROPORTION,A=m.chroma<G.TARGET_CHROMA?G.WEIGHT_CHROMA_BELOW:G.WEIGHT_CHROMA_ABOVE,y=(m.chroma-G.TARGET_CHROMA)*A,M=b+y;l.push({hct:m,score:M})}l.sort(rr);const d=[];for(let m=90;m>=15;m--){d.length=0;for(const{hct:p}of l)if(d.find(b=>re(p.hue,b.hue)<m)||d.push(p),d.length>=n)break;if(d.length>=n)break}const g=[];d.length===0&&g.push(a);for(const m of d)g.push(m.toInt());return g}}G.TARGET_CHROMA=48;G.WEIGHT_PROPORTION=.7;G.WEIGHT_CHROMA_ABOVE=.3;G.WEIGHT_CHROMA_BELOW=.1;G.CUTOFF_CHROMA=5;G.CUTOFF_EXCITED_PROPORTION=.01;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){const t=Dt(e),r=xt(e),n=Bt(e),a=[t.toString(16),r.toString(16),n.toString(16)];for(const[s,o]of a.entries())o.length===1&&(a[s]="0"+o);return"#"+a.join("")}function nr(e){e=e.replace("#","");const t=e.length===3,r=e.length===6,n=e.length===8;if(!t&&!r&&!n)throw new Error("unexpected hex "+e);let a=0,s=0,o=0;return t?(a=X(e.slice(0,1).repeat(2)),s=X(e.slice(1,2).repeat(2)),o=X(e.slice(2,3).repeat(2))):r?(a=X(e.slice(0,2)),s=X(e.slice(2,4)),o=X(e.slice(4,6))):n&&(a=X(e.slice(2,4)),s=X(e.slice(4,6)),o=X(e.slice(6,8))),(255<<24|(a&255)<<16|(s&255)<<8|o&255)>>>0}function X(e){return parseInt(e,16)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(e){const t=await new Promise((o,c)=>{const h=document.createElement("canvas"),f=h.getContext("2d");if(!f){c(new Error("Could not get canvas context"));return}const l=()=>{h.width=e.width,h.height=e.height,f.drawImage(e,0,0);let d=[0,0,e.width,e.height];const g=e.dataset.area;g&&/^\d+(\s*,\s*\d+){3}$/.test(g)&&(d=g.split(/\s*,\s*/).map(A=>parseInt(A,10)));const[m,p,u,b]=d;o(f.getImageData(m,p,u,b).data)};e.complete?l():e.onload=l}),r=[];for(let o=0;o<t.length;o+=4){const c=t[o],h=t[o+1],f=t[o+2];if(t[o+3]<255)continue;const d=Tt(c,h,f);r.push(d)}const n=Ze.quantize(r,128);return G.score(n)[0]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e,t=[]){const r=H.of(e);return{source:e,schemes:{light:K.light(e),dark:K.dark(e)},palettes:{primary:r.a1,secondary:r.a2,tertiary:r.a3,neutral:r.n1,neutralVariant:r.n2,error:r.error},customColors:t.map(n=>ir(e,n))}}async function or(e,t=[]){const r=await ar(e);return sr(r,t)}function ir(e,t){let r=t.value;const n=r,a=e;t.blend&&(r=qt.harmonize(n,a));const o=H.of(r).a1;return{color:t,value:r,light:{color:o.tone(40),onColor:o.tone(100),colorContainer:o.tone(90),onColorContainer:o.tone(10)},dark:{color:o.tone(80),onColor:o.tone(20),colorContainer:o.tone(30),onColorContainer:o.tone(90)}}}const cr={background:i.background,"on-background":i.onBackground,surface:i.surface,"surface-dim":i.surfaceDim,"surface-bright":i.surfaceBright,"surface-container-lowest":i.surfaceContainerLowest,"surface-container-low":i.surfaceContainerLow,"surface-container":i.surfaceContainer,"surface-container-high":i.surfaceContainerHigh,"surface-container-highest":i.surfaceContainerHighest,"on-surface":i.onSurface,"surface-variant":i.surfaceVariant,"on-surface-variant":i.onSurfaceVariant,"inverse-surface":i.inverseSurface,"inverse-on-surface":i.inverseOnSurface,outline:i.outline,"outline-variant":i.outlineVariant,shadow:i.shadow,scrim:i.scrim,"surface-tint":i.surfaceTint,primary:i.primary,"on-primary":i.onPrimary,"primary-container":i.primaryContainer,"on-primary-container":i.onPrimaryContainer,"inverse-primary":i.inversePrimary,secondary:i.secondary,"on-secondary":i.onSecondary,"secondary-container":i.secondaryContainer,"on-secondary-container":i.onSecondaryContainer,tertiary:i.tertiary,"on-tertiary":i.onTertiary,"tertiary-container":i.tertiaryContainer,"on-tertiary-container":i.onTertiaryContainer,error:i.error,"on-error":i.onError,"error-container":i.errorContainer,"on-error-container":i.onErrorContainer};function Nt(e,t){const r=new tr(F.fromInt(nr(e)),t,0),n={};for(const[a,s]of Object.entries(cr))n[a]=oe(s.getArgb(r));return n}function zt(e,t,r="material-theme"){let n=":root,:host{";for(const[a,s]of Object.entries(t))n+=`--md-sys-color-${a}:${s};`;n+="}",lr(e,n,r)}function lr(e,t,r="material-theme"){let n=globalThis[r];n||(n=new CSSStyleSheet,globalThis[r]=n,e.adoptedStyleSheets.push(n)),n.replaceSync(t),localStorage.setItem(r,t)}let wt;async function ie(e,t=!1){const r=await or(e);wt=oe(r.source);const n=Nt(wt,t);zt(document,n)}const ce=e=>{e.matches?zt(document,Nt(wt,!0)):zt(document,Nt(wt,!1))},hr=["href"],ur={class:"text"},fr={class:"title display-large"},mr={key:0,class:"subtitle"},dr={class:"date"},pr={class:"img"},gr=["src"],yr=ht({__name:"BannerArticle",props:{img:{},title:{},subtitle:{},date:{},url:{}},setup(e){const t=e,r=Zt(),n=window.matchMedia("(prefers-color-scheme: dark)");Gt(()=>ie(r.value,n.matches));const a=ce;return n.addEventListener("change",a),te(()=>n.removeEventListener("change",a)),(s,o)=>(j(),J("a",{href:t.url,id:"banner"},[L("div",ur,[L("div",fr,st(t.title),1),t.subtitle?(j(),J("div",mr,st(t.subtitle),1)):ee("",!0),L("div",dr,st(new Date(t.date).toDateString()),1)]),L("div",pr,[L("img",{ref_key:"image",ref:r,src:t.img},null,8,gr)])],8,hr))}});const Pr=Vt(yr,[["__scopeId","data-v-97b19982"]]),Mr=["href"],Cr={class:"text"},br={class:"title display-medium"},kr={key:0,class:"subtitle"},Ir={class:"date"},Ar={class:"img"},wr=["src"],Tr=ht({__name:"ArticlePrev",props:{article:{}},setup(e){const t=e;return(r,n)=>(j(),J("a",{href:t.article.url,class:"article"},[L("div",Cr,[L("div",br,st(t.article.frontmatter.title),1),t.article.frontmatter.subtitle?(j(),J("div",kr,st(t.article.frontmatter.subtitle),1)):ee("",!0),L("div",Ir,st(new Date(t.article.frontmatter.date).toDateString()),1)]),L("div",Ar,[L("img",{src:t.article.frontmatter.img},null,8,wr)])],8,Mr))}});const Dr=Vt(Tr,[["__scopeId","data-v-1ca0f4e3"]]),xr={class:"articles"},Br={class:"row"},_r=ht({__name:"Articles",props:{articles:{}},setup(e){const t=e;t.articles.shift();const r=[];for(let n=0;n<t.articles.length;n+=2)r.push([t.articles[n],...n+1<t.articles.length?[t.articles[n+1]]:[]]);return(n,a)=>(j(),J("div",xr,[(j(),J(Xt,null,Kt(r,s=>L("div",Br,[(j(!0),J(Xt,null,Kt(s,o=>(j(),de(Dr,{article:o},null,8,["article"]))),256))])),64))]))}});const Rr=Vt(_r,[["__scopeId","data-v-746579e3"]]),Fr=ht({__name:"Home",setup(e){const t=Fe.sort((n,a)=>(new Date(n.frontmatter.date).getTime()-new Date(a.frontmatter.date).getTime())*-1),r=t[0];return(n,a)=>(j(),J("div",null,[yt(Pr,{url:Q(r).url,img:Q(r).frontmatter.img,title:Q(r).frontmatter.title,date:Q(r).frontmatter.date},null,8,["url","img","title","date"]),yt(Rr,{articles:[...Q(t)]},null,8,["articles"])]))}}),Er={class:"banner"},Or={class:"text"},vr={class:"display-large title"},Lr={class:"date"},Sr={class:"img"},Hr=["src"],Nr=ht({__name:"Article",setup(e){const t=$t(),r=Zt(),n=window.matchMedia("(prefers-color-scheme: dark)");Gt(()=>ie(r.value,n.matches));const a=ce;return n.addEventListener("change",a),te(()=>n.removeEventListener("change",a)),(s,o)=>{const c=pe("Content");return j(),J("div",null,[L("div",Er,[L("div",Or,[L("div",vr,st(Q(t).frontmatter.value.title),1),L("div",Lr,st(new Date(Q(t).frontmatter.value.date).toDateString()),1)]),L("div",Sr,[L("img",{ref_key:"image",ref:r,src:Q(t).frontmatter.value.img},null,8,Hr)])]),L("div",null,[yt(c,{class:"content"})])])}}});const zr={key:0},Gr={key:1},Vr=ht({__name:"Layout",setup(e){const{site:t,frontmatter:r}=$t();return(n,a)=>Q(r).home?(j(),J("div",zr,[yt(Fr)])):(j(),J("div",Gr,[yt(Nr)]))}});const $r={Layout:Vr,enhanceApp({app:e,router:t,siteData:r}){}};function le(e){if(e.extends){const t=le(e.extends);return{...t,...e,async enhanceApp(r){t.enhanceApp&&await t.enhanceApp(r),e.enhanceApp&&await e.enhanceApp(r)}}}return e}const ut=le($r),Ur=ht({name:"VitePressApp",setup(){const{site:e}=$t();return Gt(()=>{De(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),xe(),Be(),_e(),ut.setup&&ut.setup(),()=>Re(ut.Layout)}});async function qr(){const e=Wr(),t=jr();t.provide(ye,e);const r=Pe(e.route);return t.provide(Me,r),t.component("Content",Ce),t.component("ClientOnly",be),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return r.frontmatter.value}},$params:{get(){return r.page.value.params}}}),ut.enhanceApp&&await ut.enhanceApp({app:t,router:e,siteData:ke}),{app:t,router:e,data:r}}function jr(){return Ie(Ur)}function Wr(){let e=vt,t;return Ae(r=>{let n=we(r),a=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),a=Te(()=>import(n),[])),vt&&(e=!1),a},ut.NotFound)}vt&&qr().then(({app:e,router:t,data:r})=>{t.go().then(()=>{ge(t.route,r.site),e.mount("#app")})});export{qr as createApp};
