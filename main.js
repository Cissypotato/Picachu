!function(){
    let duration=20
    function writeCode(prefix,code,fn){
        let container=document.querySelector('#code')
        let styleTag=document.querySelector('#styleTag')
        let n=0
        let id
        id=setTimeout(function run(){
            n+=1
            container.innerHTML=code.substring(0,n)
            styleTag.innerHTML=code.substring(0,n)
            container.scrollTop=container.scrollHeight
            if(n<code.length){
                id=setTimeout(run,duration)            
            }else{
                fn && fn.call()
            }
        },duration)
    }
    

    let code=`
    /*
    *今天，让我们来一起画个皮卡丘吧
    */
    /*
    *首先，准备皮卡丘的皮肤
    */
    .preview{height: 100%;display: flex;justify-content: center;align-items: center;background: #fee433}
    .wrapper{height: 168px;position: relative;}
    /*
    *然后，小鼻子
    */
    .nose{position: absolute;width: 0;height: 0;border-radius: 50%;border: solid transparent;left: 50%;
        border-top-color: #000;border-width: 12px;top: 28px;margin-left: -12px;z-index: 1}
    /*
    *大眼睛
    */
    .eye{width: 49px;height: 49px;border-radius: 50%;background: #2e2e2e;position: absolute;border: 2px solid #000;
        z-index: 1}
    .eye::before{content: '';display: block;background: #fff;position: absolute;width: 24px;height: 24px;border-radius: 50%;
        border: 2px solid #000;left: 6px;top: 1px}
    .eye.left{right: 50%;margin-right: 90px;}
    .eye.right{left: 50%;margin-left: 90px;}
    /*
    *圆脸蛋儿
    */
    .face{width: 68px;height: 68px;background: #fc0d1c;border-radius: 50%;position: absolute;border: 2px solid black;
        top: 85px;z-index: 1}
    .face.left{right: 50%;margin-right:116px;}
    .face.right{left: 50%;margin-left:116px;}
    /*
    *小嘴
    */
    .upperLip{width: 80px;height: 20px;border: 2px solid #000;position: absolute;top: 58px;background: #fee433;z-index: 1 }
    .upperLip.left{right: 50%;border-bottom-left-radius:48px 20px;border-top: none;
        border-right: none;transform: rotate(-20deg);}
    .upperLip.right{left: 50%;border-bottom-right-radius:48px 20px;border-top: none;
        border-left: none;transform: rotate(20deg);}
    /*
    *大舌头
    */
    .lowerLip-wrapper{position: absolute;bottom: 0;left: 50%;margin-left: -150px;position: absolute;height: 135px;
        width: 300px;overflow: hidden;bottom: -33px}
    .lowerLip{width: 300px;height: 3500px;background: #990513;border-radius:200px/2000px;border: 2px solid black;
        position: absolute;bottom: 0;overflow: hidden}
    .lowerLip::after{content: '';position: absolute;width: 120px;height: 120px;left: 50%;margin-left: -60px;background: #fc4a62;
        border-radius: 50%;bottom:-10px;}
    /*
    *好了，这只皮卡丘送给可爱的你
    */    
    `
    writeCode('',code)
    $('.actions').on('click','button',function(e){
        let $button=$(e.currentTarget)
        console.log( $button)
        let speed=$button.attr('data-speed')
        console.log(speed)
        $button.addClass('active').siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration=100
                break
            case 'normal':
                duration=50
                break
            case 'fast':
                duration=10
                break
        }
    })
}.call()