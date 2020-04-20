'use strict'

const debug = require('debug')('module-mail:test')
const mailService = require('../')

const mailHtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type">
    <title>Te damos la bienvenida a Salud Digna</title>
</head>

<body style="margin:0; background-color:#fafafa;">
    <table cellspacing="0" cellpadding="0" width="600" style="align-items:center;background-color:#f2f2f2;border-collapse:collapse;border-spacing:0;color:#616161;font-family:Arial;margin:0 auto;padding:0;">
        <tr style="display: inline-block" width="100%">
            <th align="right" width="100%" style="font-size: 12px;font-size: 12px!important;line-height: 14px;line-height: 14px!important;color: #232f3e;font-weight: 700;text-align: right;vertical-align: middle;white-space: nowrap;">
                <div style="display: inline-block;">
                    <table border="0" cellpadding="0" cellspacing="0" style="display:inline-block">
                        <tbody>
                            <tr>
                                <td align="left"> <img src="https://salud-digna.com/email/2019/RecursosCorreo/logo.png" alt="logo salud digna" style="padding: 10px 15px; height:27px;" title="La salud es para todos"> </td>
                                <td width="210"> </td>
                                <td valign="middle" style="vertical-align:middle;white-space:nowrap;padding-top:5px; padding-right:1px;">
                                    <a href="https://salud-digna.org/conocenos/" style="padding-right:4px;" target="_blank"><img src="https://salud-digna.com/email/2019/RecursosCorreo/conocenos.png" height="15px" alt="Conócenos"></a> </td>
                                <td valign="middle" style="vertical-align:middle;white-space:nowrap;padding-top:0px; padding-right:6px;">
                                    <a href="https://salud-digna.org/conocenos/" target="_blank" style="color:#616161;font-weight:600;text-decoration: none;font-size:12px;">Conócenos</a>
                                </td>
                                <td valign="middle"
                                        style="vertical-align:middle;white-space:nowrap;padding-right:0px;"> <a
                                            href="https://salud-digna.org/vacantes/#preguntas" style="padding-right:4px;"
                                            target="_blank"><img
                                                src="https://salud-digna.com/email/2019/RecursosCorreo/preguntas-frec.png"
                                                height="15px" alt="Pregutas frecuentes"></a> 
                                    </td>
                                    <td valign="middle"
                                        style="vertical-align:middle;white-space:nowrap;padding-right:6px;"> <a
                                            href="https://salud-digna.org/vacantes/#preguntas" target="_blank"
                                            style="color:#616161;font-weight:600;text-decoration: none;font-size:12px;">Preguntas frecuentes</a> 
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td style="align-items:center;background-color: #F7B63D;color:#ffffff;font-weight:600;height: 30px;font-size: 14px;font-family:Arial,Helvetica,sans-serif;">
                    <center>¡Hola, VARNOMBRE!</center>
                </td>
            </tr>
            <tr style="height:15px;background:#F2F2F2;">
                <td></td>
            </tr>
            <tr style="background-color: #F2F2F2;">
                <td>
                    <img style="width: 95%; display: block; margin: 0 auto;" src="https://salud-digna.com/email/2019/RecursosCorreo/juarez.png" alt="">
                </td>
            </tr>
            <tr>
                <td style="padding: 0px 15px;background-color: #f2f2f2; border-radius: 0px 0px 4px 4px;">
                    <div style="border-radius: 0px 0px 4px 4px;padding-bottom: 15px;background-color: #ffffff">
                        <table style="background-color: #FFFFFF">
                            <tbody>
                                <tr>
                                    <td width="15px"></td>
                                    <td>
                                        <div style="align-items: center;background-color: #fff;padding:15px; font-size: 16px;width: 543px;">
                                            <p>
                                                Gracias por postularte a nuestra vacante de VARPUESTO para nuestra clínica <b>Salud Digna VARSUCURSAL</b>. Te recomendamos estar al tanto de tu teléfono. ¡Espera nuestra llamada! 
                                                <br><br>
                                                ¡El puesto de <b>VARPUESTO</b> está cada vez más cerca!</p>

                                        </div>


                                    </td>
                                    <td width="15px"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>






                </td>
            </tr>
            
            <tr height="10px">
                <td>
                    <div style="width:100%;height:10px;background-color:#f2f2f2;"></div>
                </td>
            </tr>

            <tr height="10px">
                <td>
                    <div style="width:100%;height:10px;background-color:#f2f2f2;"></div>
                </td>
            </tr>
        </tbody>
    </table>
    <div style="background-color: #fafafa;padding:0px;">
        <table cellspacing="0" cellpadding="0" width="570" style="background-color: #fafafa;align-items:center;border-collapse:collapse;border-spacing:0;color:#616161;font-family:Arial;margin:0 auto;padding:0;">
            <thead>
                <tr>
                    <th>
                        <center style="display: inline-block;">
                            <table border="0" cellpadding="0" cellspacing="0" style="display:inline-block">
                                <tbody>
                                    <tr>
                                        <td valign="middle" style="vertical-align:middle;white-space:nowrap;padding:10px 25px;">
                                            <a href="https://www.salud-digna.org" target="_blank"><img src="https://salud-digna.com/email/2019/RecursosCorreo/chat.png" height="25px" alt="Comunicate con nosotros"> </a>
                                        </td>
                                        <td valign="middle" style="vertical-align:middle;white-space:nowrap;padding:10px 25px;">
                                            <a href="https://www.facebook.com/SaludDignaMx/" target="_blank"><img src="https://salud-digna.com/email/2019/RecursosCorreo/facebook.png" height="25px" alt="Comunicate con nosotros"> </a>
                                        </td>
                                        <td valign="middle" style="vertical-align:middle;white-space:nowrap;padding:10px 25px;">
                                            <a href="https://twitter.com/saluddigna" target="_blank"><img src="https://salud-digna.com/email/2019/RecursosCorreo/twitter.png" height="25px" alt="Comunicate con nosotros"> </a>
                                        </td>
                                        <td valign="middle" style="vertical-align:middle;white-space:nowrap;padding:10px 25px;">
                                            <a href="https://www.instagram.com/SaludDigna_Mx/" target="_blank"><img src="https://salud-digna.com/email/2019/RecursosCorreo/instagram.png" height="25px" alt="Comunicate con nosotros"> </a>
                                        </td>
                                        <td valign="middle" style="vertical-align:middle;white-space:nowrap;padding:10px 25px;">
                                            <a href="https://www.youtube.com/channel/UC-Kiat6bWSkaCoMVB6lXyog/videos" target="_blank"><img src="https://salud-digna.com/email/2019/RecursosCorreo/youtube.png" height="25px" alt="Comunicate con nosotros"> </a>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </center>

                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 19px; font-family: sans-serif; font-family: 'Arial'; font-size: 10px; color: #616161">
                        Nuestros servicios son reconocidos con acreditaciones nacionales e internacionales:
                    </td>
                </tr>
                <tr>
                    <td>
                        <center>
                            <table border="0" cellpadding="0" cellspacing="0" style="display:inline-block">
                                <tbody>
                                    <tr>
                                        <td valign="middle" style="vertical-align:middle;white-space:nowrap;padding:0px 50px 0px 0px;">
                                            <img src="https://salud-digna.com/email/2019/RecursosCorreo/calidad.png" height="58px" alt="logotipo">
                                        </td>
                                        <td valign="middle" style="vertical-align:middle;white-space:nowrap;padding:10px 20px 0px 40px">
                                            <img src="https://salud-digna.com/email/2019/RecursosCorreo/proteccion.png" height="35px" alt="logotipo">
                                        </td>
                                        <td valign="middle" style="vertical-align:middle;white-space:nowrap;padding:0px 0px 0px 50px;">
                                            <img src="https://salud-digna.com/email/2019/RecursosCorreo/lucro.png" height="28px" alt="logotipo">
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </center>

                    </td>
                </tr>
                <tr>
                    <td style="padding: 19px; font-family: sans-serif; font-family: 'Arial'; font-size: 10px; color: #616161">
                        Salud Digna AC, mejor conocido como Salud Digna, con domicilio fiscal en calle Francisco Villa 113 sur, Colonia Centro, C.P.80000, Culiacán Sinaloa, México; en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y normativa aplicable.
                        Le notifica que los datos personales recabados y tratados por este medio, para las principales finalidades, como, dar atención a las solicitudes de las diferentes áreas, de clientes y proveedores; notificar cambios en los sistemas de gestión y operativos, análisis y estadística en los servicios, medición de la calidad y servicio en los procesos atención y de soporte; así como hacerle llegar de manera secundaría, mercadotecnia o publicitaria de la institución, está sujetas a las disposiciones que marca nuestro Aviso de Privacidad Integral, mismo que podrá consultar en la página en internet. <a href="https://www.salud-digna.org/aviso-de-privacidad" target="_blank">www.salud-digna.org/aviso-de-privacidad</a>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</body></html>`

async function test () {
  try {
    debug('INICIO DEL TEST')
    const send = {
      identidad: 'carlosm',
      from: 'mi-cita@salud-digna.com',
      to: 'carlosm3415@gmail.com',
      subject: '¡Aplicación de vacante exitosa! | Salud Digna ',
      html: mailHtml
    }

    const respuesta = await mailService.enviar(send)
    debug('CORREO ENVIADO')
    debug(respuesta)
  } catch (error) {
    debug('ERROR EN EL TEST')
    debug(error)
  }
  process.exit(0)
}

test()
