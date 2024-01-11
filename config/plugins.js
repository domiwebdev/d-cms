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
                text: {
                  value: 'Heading',
                },
              },
            },
            text: {
              properties: {
                text: {
                  value: 'Text',
                },
              },
            },
          },
          options: {
            features: {
              colorPicker: {
                presets: ['#1a110a', '#271b13', '#fadbb7', '#c0a28d', '#eb7676', '#4f8bff']
              },
              // textEditor: {
              //   cleanPaste: "basic"
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
                name: '_Other',
              },
              {
                name: "_For Templates",
                mergeTags: [
                  {
                    name: 'Is Template',
                    value: '{{TEMPLATE}}',
                    sample: '[ TEMPLATE ]',
                  },
                  {
                    name: 'Content Start',
                    value: '{{CONTENT_START}}',
                    sample: '[ CONTENT START ]',
                  },
                  {
                    name: 'Content End',
                    value: '{{CONTENT_END}}',
                    sample: '[ CONTENT END ]',
                  },
                  {
                    name: 'Privacy Start',
                    value: '{{PRIVACY_START}}',
                    sample: '[ PRIVACY START ]',
                  },
                  {
                    name: 'Privacy End',
                    value: '{{PRIVACY_END}}',
                    sample: '[ PRIVACY END ]',
                  },
                ]
              },
              {
                name: 'Template Top',
                value: '{{TEMPLATE_TOP}}',
                sample: '[ INSERT TEMPLATE TOP ]',
              },
              {
                name: 'Template Bottom',
                value: '{{TEMPLATE_BOTTOM}}',
                sample: '[ INSERT TEMPLATE BOTTOM ]',
              },
              {
                name: 'Is Mandatory',
                value: '{{MANDATORY}}',
                sample: '[ MANDATORY ]',
              },
              {
                name: 'Hide Privacy Section',
                value: '{{NO_PRIVACY}}',
                sample: '[ HIDE PRIVACY ]',
              },
              {
                name: 'Is Disabled',
                value: '{{DISABLED}}',
                sample: '[ DISABLED ]',
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
