package com.doantotnghiepptit.GiaoLuuCauLong.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "attribuite_type")
public class AttribuiteType {
    @Id
    private Long id;
    private String name;
    private String dataType;
    private LocalDateTime createAt;
    private LocalDateTime modifiedAt;

    @ManyToOne
    @JoinColumn(name = "post_type_id")
    private PostType postType;
}
