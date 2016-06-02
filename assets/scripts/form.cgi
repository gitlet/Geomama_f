# import web
# urls = (
#     'Index'
# )
# app = web.application(urls, globals())
# render = web.template.render('templates/')
# class Index(object):
#     # """docstring for """
#     def GET(self):
#         form = web.input(name="Nobody")
#         # self.arg = arg
#         return render.index
formData = cgi.FieldStorage()
username = formData.getvalue('username')
return username
