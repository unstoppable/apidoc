const apidoc = require('../lib')

const src = `
/**
 * @api               {post} /backend/desktop-user-auth/version 桌面程序版本管理
 *
 * @apiDescription    桌面程序版本管理 <form database="desktop_version" system="kzBackend" name="DesktopVersion" varPrefix="itemList" />
 * @apiSampleRequest  https://qa-backend.starsai.com/backend/desktop-user-auth/version
 * @apiName           backendDesktopUserAuthVersion
 * @apiParam {Integer} dataVersion=1
 * @apiGroup          backend/backend/desktopUser
 * @apiVersion        0.1.0
 *
 * @apiSuccess {Object[]} itemList 桌面程序版本管理
 * @apiSuccess {String}   itemList._id id <formItem type="Input" readOnly={true} disabled={true} /><tableColumn ignore={true} />
 * @apiSuccess {String}   itemList.name 程序名称 <tableColumn queryable={true} sortable={true} />
 * @apiSuccess {string}   itemList.version 版本号 <tableColumn queryable={true} sortable={true} />
 * @apiSuccess {object}   itemList.upload 上传APP<formItem type='upload-qiniu' bucketName='stars' accept='.air' multiple={false}/><tableColumn ignore='true' />
 * @apiSuccess {String}   itemList.upload.name 文件名 <formItem ignore='true' />
 * @apiSuccess {String}   itemList.upload.key 文件hash <formItem ignore='true' />
 * @apiSuccess {String}   itemList.upload.url 网址 <formItem ignore='true' />
 * @apiSuccess {String}   [itemList.desc] 版本描述
 */
`;

const json = apidoc.parse(src, {})
console.log('result: \n', json)