import TagService from 'services/TagService';
import { Body, Controller, Get, Post, Response, Route, SuccessResponse, Tags } from 'tsoa';
import Logger from 'utils/Logger';
import { Tag, TagCreateRequest } from '../interfaces/tag';

const log = new Logger('TagController');

@Route('v1/tags')
export class TagController extends Controller {

  private tagService: TagService;

  constructor() {
    super();
    this.tagService = new TagService();
  }

  @Tags('tags')
  @Get()
  public async getAll(): Promise<Tag[] > {
    log.debug('getting all tags');
    return this.tagService.getAll();
  }

  @Tags('tags')
  @Get('{id}')
  @Response(404, 'Not Found')
  @SuccessResponse(200, 'Ok')
  public async get(id: number): Promise<Tag> {
    log.debug('getting tag with id: ' + id);
    return this.tagService.findById(id);
  }

  @Tags('tags')
  @Post()
  @Response(400, 'Bad Request')
  @Response(409, 'Conflict')
  @SuccessResponse(200, 'Ok')
  public async add(@Body() request: TagCreateRequest): Promise<Tag> {
    log.debug('inserting tag: ' + JSON.stringify(request));
    return this.tagService.insert(request as Tag);
  }

  public setService(service: TagService) {
    this.tagService = service;
  }
}
