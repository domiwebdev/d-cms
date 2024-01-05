module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET'),
      },
    },
    upload: {
      config: {
        // provider: 'cloudinary',
        // providerOptions: {
        //   cloud_name: env('CLOUDINARY_NAME'),
        //   api_key: env('CLOUDINARY_KEY'),
        //   api_secret: env('CLOUDINARY_SECRET'),
        // },
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
          params: {
            ACL: env('AWS_ACL', 'public-read'),
            signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
            Bucket: env('AWS_BUCKET'),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    'email-designer': {
      enabled: true,
      config: {
        editor: {
          projectId: 206883,
          tools: {
            heading: {
              properties: {
                // text: {
                //   value: 'This is the new default text!',
                // },
              },
            },
          },
          options: {
            features: {
              // colorPicker: {
              //   presets: ['#D9E3F0', '#F47373', '#697689', '#37D67A'],
              // },
              // textEditor: {
              //   cleanPaste: basic
              // }
            },
            fonts: {
              // showDefaultFonts: false,
              // /*
              //  * If you want use a custom font you need a premium unlayer account and pass a projectId number :-(
              //  */
              // customFonts: [
              //   {
              //     label: 'Anton',
              //     value: "'Anton', sans-serif",
              //     url: 'https://fonts.googleapis.com/css?family=Anton',
              //   },
              //   {
              //     label: 'Lato',
              //     value: "'Lato', Tahoma, Verdana, sans-serif",
              //     url: 'https://fonts.googleapis.com/css?family=Lato',
              //   },
              //   // ...
              // ],
            },
            mergeTags: [
              {
                name: 'Content Start',
                value: '{{ CONTENT_START }}',
                sample: '[ HEADER ]',
              },
              {
                name: 'Content End',
                value: '{{ CONTENT_END }}',
                sample: '[ FOOTER ]',
              },
            ],
          },
          appearance: {
            // theme: 'dark',
            // panels: {
            //   tools: {
            //     dock: 'left',
            //   },
            // },
          },
        },
      },
    },
  });
