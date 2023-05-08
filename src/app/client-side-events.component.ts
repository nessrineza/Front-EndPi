/**
 * Rich Text Editor Event functionality Sample
 */
import { Component, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { addClass, removeClass, Browser } from '@syncfusion/ej2-base';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService } from '@syncfusion/ej2-angular-richtexteditor';
import { ActionBeginEventArgs, ActionCompleteEventArgs } from '@syncfusion/ej2-angular-richtexteditor';
import { RichTextEditorComponent, RichTextEditorModel } from '@syncfusion/ej2-angular-richtexteditor';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
@Component({
    selector: 'control-content',
    templateUrl: 'publication.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['events.css'],
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, TableService]
})
export class EventsComponent {

    @ViewChild('RTEevents')
    private rteObj: RichTextEditorComponent | undefined;

    @ViewChild('EventLog')
  public log!: ElementRef;

    public tools: ToolbarModule = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };

    // Display event log
    appendElement(html: string): void {
        const span: HTMLElement = document.createElement('span');
        span.innerHTML = html;
        this.log.nativeElement.insertBefore(span, this.log.nativeElement.firstChild);
    }

    // Handler for created event trace
    onCreate(): void {
        this.appendElement('Rich Text Editor <b>create</b> event called<hr>');
    }
    //Handler for changed event trace
    onChange(): void {
        this.appendElement('Rich Text Editor <b>change</b> event called<hr>');
    }
    begin(args: ActionBeginEventArgs): void {
        this.appendElement('<b>' + args.requestType + '</b> action is called<hr>');
        this.handleFullScreen(args);
    }
    complete(args: ActionCompleteEventArgs): void {
        this.appendElement('<b>' + args.requestType + '</b> action is completed<hr>');
        this.actionCompleteHandler();
    }
    focus(): void {
        this.appendElement('Rich Text Editor <b>focus</b> event called<hr>');
    }
    blur(): void {
        this.appendElement('Rich Text Editor <b>blur</b> event called<hr>');
    }
    toolbarClick(): void {
        this.appendElement('Rich Text Editor <b>toolbar click</b> event called<hr>');
    }

    beforeDialogOpen(): void {
         this.appendElement('Rich Text Editor <b>beforeDialogOpen</b> event called<hr>');
    }

    dialogOpen(): void {
         this.appendElement('Rich Text Editor <b>dialogOpen</b> event called<hr>');
    }

    dialogClose(): void {
         this.appendElement('Rich Text Editor <b>dialogClose</b> event called<hr>');
    }

    beforeQuickToolbarOpen(): void {
         this.appendElement('Rich Text Editor <b>beforeQuickToolbarOpen</b> event called<hr>');
    }

    quickToolbarOpen(): void {
         this.appendElement('Rich Text Editor <b>quickToolbarOpen</b> event called<hr>');
    }

    quickToolbarClose(): void {
         this.appendElement('Rich Text Editor <b>quickToolbarClose</b> event called<hr>');
    }

    imageSelected(): void {
         this.appendElement('Rich Text Editor <b>imageSelected</b> event called<hr>');
    }

    imageUploading(): void {
         this.appendElement('Rich Text Editor <b>imageUploading</b> event called<hr>');
    }

    imageUploadSuccess(): void {
         this.appendElement('Rich Text Editor <b>imageUploadSuccess</b> event called<hr>');
    }

    imageUploadFailed(): void {
         this.appendElement('Rich Text Editor <b>imageUploadFailed</b> event called<hr>');
    }

    imageRemoving(): void {
         this.appendElement('Rich Text Editor <b>imageRemoving</b> event called<hr>');
    }

    destroyed(): void {
         this.appendElement('Rich Text Editor <b>destroyed</b> event called<hr>');
    }

    beforeSanitizeHtml(): void {
         this.appendElement('Rich Text Editor <b>beforeSanitizeHtml</b> event called<hr>');
    }

    resizing(): void {
         this.appendElement('Rich Text Editor <b>resizing</b> event called<hr>');
    }

    resizeStart(): void {
         this.appendElement('Rich Text Editor <b>resizeStart</b> event called<hr>');
    }

    resizeStop(): void {
         this.appendElement('Rich Text Editor <b>resizeStop</b> event called<hr>');
    }

    onClear(): void {
        this.log.nativeElement.innerHTML = '';
    }


    handleFullScreen(e: any): void {
        const sbCntEle: HTMLElement = document.querySelector('.sb-content.e-view');
        const sbHdrEle: HTMLElement = document.querySelector('.sb-header.e-view');
        const leftBar: HTMLElement = document.querySelector('#left-sidebar');
        if (e.targetItem === 'Maximize') {
            if (Browser.isDevice && Browser.isIos) {
                addClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            addClass([leftBar], ['e-close']);
            removeClass([leftBar], ['e-open']);
        } else if (e.targetItem === 'Minimize') {
            if (Browser.isDevice && Browser.isIos) {
                removeClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            removeClass([leftBar], ['e-close']);
            if (!Browser.isDevice) {
                addClass([leftBar], ['e-open']);
            }
        }
    }

    actionCompleteHandler(): void {
        setTimeout(() => { this.rteObj.toolbarModule.refreshToolbarOverflow(); }, 400);
    }
}
